<script setup lang="ts">
import { get_current_service } from "../js/Service";
const service = get_current_service();

const action = (action: number) => {
  fetch("/api/services/action", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      serviceName: service.value.serviceName,
      action: action,
    }),
  });
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
          <button @click="action(0)">>Stop</button>
        </div>
      </div>
    </div>
  </div>
</template>
