<template>
<div>
  <h2 class="headline">numbers result ({{ListCountries.length}})</h2>
  <main class="list-countries">
   <CardCountry 
   v-for="country in ListCountries" 
   :key="country.alpha2Code"
   :country="country"/>
 </main>
</div>

</template>

<script>
import CardCountry  from '@/components/CardCountry';
export default {
    name:'ListCountries',
    props: {
      ListCountries: {type: Array}
    },
    components: {
     CardCountry
    }
}
</script>

<style lang="scss" scoped>
 .list-countries {
   margin-top: 1em;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
 }
 .headline {
   margin-top: 1em;
   text-align: center;
 }
</style>