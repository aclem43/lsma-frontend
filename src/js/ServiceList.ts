
import { ref } from "vue";
import type { Ref } from "vue";
import type { RawServiceInterface, ServiceInterface } from "./Service";
import { convertStatus } from "./Status";

const serviceList = ref<Array<ServiceInterface>>([])

export const getServiceList = ():Ref<Array<ServiceInterface>> => {
    return serviceList;
}

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

