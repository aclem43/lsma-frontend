<script setup lang="ts">
import ServiceList from "./components/ServiceList.vue";
import ServiceManager from "./components/ServiceManager.vue";
</script>

<template>
  <div class="main">
    <ServiceList />
    <ServiceManager />
  </div>
</template>

<style>
@import "@/assets/index.css";

.main {
  width: 100%;
  display: flex;
  gap: 40px;
}
</style>
