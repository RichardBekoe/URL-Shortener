<template>
  <div>
    <nav class="navbar navbar-dark bg-dark"></nav>
    <div class="container">
      <home />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script> 

