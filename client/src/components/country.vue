<template>
    <section>
    <h2 v-if="countries.length == 0" class="headline">You haven't done a search yet</h2>
    <h2 v-else class="headline">countries found ({{countries.length}})</h2>
     <div class="container">
      <span></span>
      <div class="card" v-for="country in countries" :key="country.name">
          <img :src="country.flag" :alt="`img ${country.name}`" class="card__img">
          <div class="card__content">
            <p><strong>Name: </strong> {{country.name}} ({{country.alpha2Code}})</p>
            <p><strong>Region: </strong> {{country.region}} ({{country.subregion}})</p>
            <p><strong>Capital: </strong> {{country.capital}}</p>
            <strong>Languages: </strong>
            <ul>
              <li v-for="language of country.languages" :key="language.name">
                {{language.name}}
              </li>
            </ul>
            <strong>Currencies:</strong>
            <ul>
              <li v-for="currency of country.currencies" :key="currency.code">
                {{currency.name}} {{currency.symbol}}{{currency.code}}
              </li>
            </ul>
            <p><strong>Area: </strong> {{country.area}}km</p>
            <p><strong>population: </strong> {{country.population}} hab. ({{country.demonym}})</p>
          </div>
      </div>
     </div>
    </section>
</template>

<script>
export default {
  props:{
    countries: Array
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  flex-flow: wrap;
}
.headline{
  text-align: center;
}
.card{
  border-radius: 2px;
  width: 500px;
  box-shadow: -20px 15px #1E88E5;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  margin: 1.5em;
}
.card__img{
  width: 200px;
  padding: 1em;
  align-self: center;
}
.card__content{
  padding: 1em;
}
@media (max-width:400px){
  .card{
    flex-direction: column;
  }
}
</style>
