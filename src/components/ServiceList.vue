<script setup lang="ts">
import { ref, onMounted } from "vue";
import { convertStatus } from "../js/Status";
import { set_current_service } from "../js/Service";
import type { ServiceInterface, RawServiceInterface } from "../js/Service";
const services = ref<Array<ServiceInterface>>([]);

const click = (service: ServiceInterface) => {
  set_current_service(service);
};

onMounted(async () => {
  const raw_data = await fetch("/api/services/");
  const data: { services: Array<ServiceInterface> } = { services: [] };

  (await raw_data.json()).services.forEach((service: RawServiceInterface) => {
    data.services.push({
      ...service,
      status: convertStatus(service.status),
    });
  });
  services.value = data.services;
});
</script>

<template>
  <div class="service">
    <div>
      <h3>Services</h3>
    </div>
    <table class="tabledata">
      <thead>
        <tr>
          <th class="tableborder">Service Display Name</th>
          <th class="tableborder">Service Name</th>
          <th class="">Status</th>
        </tr>
      </thead>
      <tr
        @click="set_current_service(service)"
        class="tablerow"
        v-for="service in services"
      >
        <td class="tableborder">{{ service.serviceDisplayName }}</td>
        <td class="tableborder">{{ service.serviceName }}</td>
        <td class="">{{ service.status }}</td>
      </tr>
    </table>
  </div>
</template>
<style>
table {
  text-align: left;
  position: relative;
  border-collapse: collapse;
}
th,
td {
  padding: 0.25rem;
}

th {
  background: white;
  position: sticky;
  top: 0; /* Don't forget this, required for the stickiness */
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
}
</style>
