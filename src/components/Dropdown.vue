<script lang="ts" setup>

interface Options {
    action: (parm:any) => any,
    text:String,
    param: any
}

const props = defineProps({ options: Array<Options>});

console.log(props.options)
</script>

<template>
  <div class="dropdown">
    <button class="dropbtn"><slot /></button>
    <div class="dropdown-content">
      <div v-for="option in props.options">
        <a @click="option.action(option.param)">{{ option.text }}</a>
      </div>
    </div>
  </div>
</template>

<style>
/* Style The Dropdown Button */
.dropbtn {
  border: solid gray 1px;
  border-radius: 2px;
  padding: 2px 6px;
  outline: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: lightgray;
}
</style>
