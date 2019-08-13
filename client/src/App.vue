<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
export default {
  components:{
     Navbar
  }
}
</script>


<style>
 body{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Open Sans', sans-serif;
   font-size: 16px;
 }
</style>
