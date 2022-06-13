
import { ref,computed } from "vue";
import type { Ref } from "vue";
import { get_current_service, set_current_service, type RawServiceInterface, type ServiceInterface } from "./Service";
import { convertStatus } from "./Status";

let serviceList:Ref<Array<ServiceInterface>> = ref([])
let searchref:Ref<string>;
const filteref:Ref<string> = ref("serviceDisplayName");

export const setFilter = (filter:string):void => {
  filteref.value = filter;
}

export const getFilter = ():Ref<string> => {
  return filteref;
}

export const getServiceList = computed(() => {
  if (searchref.value == "" || searchref.value == null || searchref.value == undefined){
    return serviceList.value
  }

  let returnlist = []

  for (let service of serviceList.value){

    if (service[filteref.value].toLocaleLowerCase().includes(searchref.value.toLocaleLowerCase())){
      returnlist.push(service)
    }
   
  }
  return returnlist
 
});

export const updateServiceList = async() => {
    const raw_data = await fetch("/api/services/");
    const data: { services: Array<ServiceInterface> } = { services: [] };
  
    (await raw_data.json()).services.forEach((service: RawServiceInterface) => {
      data.services.push({
        ...service,
        status: convertStatus(service.status),
      });
    });
   
    serviceList.value = data.services;

    const current_service = get_current_service()
    for (let service of data.services){
      if (service.serviceName == current_service.value.serviceName){
        set_current_service(service)
      }
    }
};

export const setSearchRef = (searchRef:Ref<string>) => {  
  searchref = searchRef;
}
