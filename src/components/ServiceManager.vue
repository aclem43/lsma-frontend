<script setup>
import { getServices } from "../js/Data.ts";

getServices();
</script>

<template>
  <div class="servicemanager">
    <h4>Current Service: {name}</h4>
    <div class="flex">
      <table class="tablealign">
        <tr>
          <td>Status:</td>
          <td>Running</td>
        </tr>
        <tr>
          <td>Display Name:</td>
          <td>{name}</td>
        </tr>
      </table>
      <div class="controller">
        <div>
          <button>Start</button>
        </div>
        <div>
          <button>Restart</button>
        </div>
      </div>
    </div>
  </div>
</template>
