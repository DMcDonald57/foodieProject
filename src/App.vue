<template>
  <div id="app">
    <router-view/>
    <!-- <pageTopper/>
    <welcomePage/> -->
    
  </div>
</template>

<script>
// import pageTopper from "@/components/pageTopper.vue";
// import welcomePage from "@/views/welcomePage";
  
export default{
  name : "App",
  // components :  {
  //   pageTopper,
  //   welcomePage,
  //   }

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

html{
  background-color: blanchedalmond;
}

</style>
