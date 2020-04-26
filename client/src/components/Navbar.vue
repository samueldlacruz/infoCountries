<template>
  <header class="navbar">
    <h1 class="navbar__brand">Info countries</h1>
    <p class="navbar__text">Find a country and Discover</p>
  </header>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style lang="scss" escaped>
.navbar {
  font-family: 'Open Sans', sans-serif;
  background-color: rgba($color: #73cf83b7, $alpha: 1.0);
  color: white;
  padding: .5em;
  text-align: center;

 &__text {
   padding: 5px;
   font-size: .9em;
 }
 &__brand{
  color:white;
 }
}
</style>