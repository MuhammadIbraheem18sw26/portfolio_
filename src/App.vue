<template>
<div>
    <Header></Header> 
    
  </div>

  
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}

</script>

<style>
body {
  background-color: #fff; /* White background */
}

.navbar-light .navbar-nav .nav-link {
  color: #000; /* Black text color */
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #ffc107; /* Yellow hover color */

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>



