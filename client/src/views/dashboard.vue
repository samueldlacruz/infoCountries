<template>
<div>
  <Search @get-to-countries="getCountries"/>
  <country :countries="countries"/>
</div>
</template>

<script>
import Search from '../components/search'
import Country from '../components/country'

export default {
  name: 'dashboard',
  data(){
   return {
     countries:[]
   }
  },
  components:{
    Search,
    Country
  },
  methods:{
    getCountries(data){
      this.countries = data;
      console.log(this.countries);
    }
  }
}
</script>

