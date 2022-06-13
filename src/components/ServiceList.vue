<script setup lang="ts">
import { ref, onMounted } from "vue";
import { set_current_service } from "../js/Service";
import type { ServiceInterface, RawServiceInterface } from "../js/Service";
import {
  getFilter,
  getServiceList,
  setFilter,
  setSearchRef,
  updateServiceList,
} from "../js/ServiceList";
import Dropdown from "./Dropdown.vue";

const search = ref("");

setSearchRef(search);
const serviceList = getServiceList;

const click = (service: ServiceInterface) => {
  set_current_service(service);
};
const refresh = () => {
  updateServiceList();
};

onMounted(async () => {
  updateServiceList();
});

const filter = getFilter();

const dropdownOptions = [
  { text: "Display Name", action: setFilter, param: "serviceDisplayName" },
  { text: "Service Name", action: setFilter, param: "serviceName" },
];
</script>

<template>
  <div class="service">
    <div>
      <h3>Services</h3>
    </div>
    <button @click="refresh()">Refresh</button>
    <div class="functionbar">
      <Dropdown :options="dropdownOptions">Filter</Dropdown>

      <div>Filtering: {{ filter }}</div>
      <input v-model="search" class="searchbar" placeholder="Search..." />
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
        @click="click(service)"
        class="tablerow"
        v-for="service in serviceList"
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
  max-height: 50%;
  overflow-y: scroll;
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

.functionbar {
  gap: 20px;
  display: flex;
  flex-direction: row;
}

.searchbar {
  outline: none;
}
</style>
