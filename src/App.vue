<template>
  <div id="app">
    <Fitty :options="options">
      <h1>Huge text</h1>
    </Fitty>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Fitty from "./components/Fitty.vue";

export default defineComponent({
  name: "App",
  components: {
    Fitty,
  },
  data() {
    return {
      options: {
        minSize: 18,
        maxSize: 120,
      },
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
