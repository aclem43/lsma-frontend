<script setup>
import ServiceList from "./components/ServiceList.vue";
import ServiceManager from "./components/ServiceManager.vue";
</script>

<template>
  <table class="main">
    <tr>
      <td><ServiceList></ServiceList></td>
      <td><ServiceManager></ServiceManager></td>
    </tr>
  </table>
</template>

<style>
@import "@/assets/index.css";

.main {
  width: 100%;
}
</style>
