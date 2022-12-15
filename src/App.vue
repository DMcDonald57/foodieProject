<template>
  <div id="app">
    <router-view/>
    
  </div>
</template>

<script>
  
    export default{
      name : "App",
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
  background-color: #ffebcd;
  background-image: url("https://img.freepik.com/free-photo/chopping-board-surrounded-with-vegetables-eggs-rice-grains-desk_23-2148062361.jpg?w=2000");
  background-size: cover;
}

</style>
