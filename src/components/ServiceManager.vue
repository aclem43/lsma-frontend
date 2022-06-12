<script setup lang="ts">
import { get_current_service } from "../js/Service";
import { updateServiceList } from "../js/ServiceList";

const service = get_current_service();

const action = async (action: number) => {
  let raw_lite_service = await fetch("/api/services/action", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      serviceName: service.value.serviceName,
      action: action,
    }),
  });
  let lite_service = await raw_lite_service.json();
  service.value = {
    serviceName: lite_service.serviceName,
    status: lite_service.status,
    serviceDisplayName: service.value.serviceDisplayName,
  };
  updateServiceList();
};
</script>

<template>
  <div class="servicemanager">
    <h4>Current Service: {{ service.serviceName }}</h4>
    <div class="flex">
      <table class="tablealign">
        <tr>
          <td>Status:</td>
          <td>{{ service.status }}</td>
        </tr>
        <tr>
          <td>Display Name:</td>
          <td>{{ service.serviceDisplayName }}</td>
        </tr>
      </table>
      <div class="controller">
        <div>
          <button @click="action(1)">Start</button>
        </div>
        <div>
          <button @click="action(0)">Stop</button>
        </div>
      </div>
    </div>
  </div>
</template>
