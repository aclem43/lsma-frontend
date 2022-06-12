
import { ref,computed } from "vue";
import type { Ref } from "vue";
import type { RawServiceInterface, ServiceInterface } from "./Service";
import { convertStatus } from "./Status";

let serviceList:Ref<Array<ServiceInterface>> = ref([])
let searchref:Ref<string>;


export const getServiceList = computed(() => {
  console.log(searchref.value)
  if (searchref.value == "" || searchref.value == null || searchref.value == undefined){
    return serviceList.value
  }

  let returnlist = []

  for (let service of serviceList.value){
   
    //console.log(service);
 
    
    if (service.serviceDisplayName.toLocaleLowerCase().includes(searchref.value.toLocaleLowerCase())){
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
};

export const setSearchRef = (searchRef:Ref<string>) => {  
  searchref = searchRef;
}
