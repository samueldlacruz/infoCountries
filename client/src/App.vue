<template>
  <div id="app">
    <Navbar />
    <Search @get-countries="getCountries" />
    <ListCountries :list-countries="countries" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import ListCountries from '@/components/ListCountries';

export default {
  name: 'App',
  components: {
    Navbar,
    Search,
    ListCountries
  },
  data(){
    return {
      countries: []
    }
  },
  methods: {
    async  getCountries(name) {
      let self = this;
      this.debounce( async () => {
        const response = await fetch(`/api/v1/countries/${name}`);
        if (response.status === 200) {
        const countries = await response.json();
        self.countries = countries;  
       }  
      }, 3000)();
    },
  debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
     }
   } 
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
$font-base:  'Open Sans', sans-serif;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
   font-family: $font-base;
}
</style>
