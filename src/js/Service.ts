import { ref, computed } from "vue";

export interface ServiceInterface {
    serviceDisplayName:string,
    serviceName:string,
    status:string
}

export interface RawServiceInterface {
    serviceDisplayName:string,
    serviceName:string,
    status:number
}


const current_service = ref<ServiceInterface>({
    serviceDisplayName:"Null",
    serviceName:"Null",
    status:"Null"
})

export const set_current_service = (service:ServiceInterface) => {
    current_service.value = service;    
}

export const get_current_service = ()=>{
    return current_service
}

