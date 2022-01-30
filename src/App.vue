<template>
  <TopBar style="position:sticky;top:0;z-index:100"/>
  <Index/>
  <SearchBar/>
  <Box/>
</template>


<script>
import TopBar from "./components/TopBar.vue";
import Index from "./components/Index.vue";
import SearchBar from "./components/SearchBar.vue";
import Box from "./components/Box.vue"

import "./assets/common.css";

export default {
    name: "App",
    components:{
      TopBar,Index,Box,SearchBar
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
