<template>
 <div class="card">
    <img :src="country.flag" :alt="`img ${country.name}`" class="card__img">
    <div class="card__content">
    <p><strong>Name: </strong> {{country.name}} ({{country.alpha2Code}})</p>
    <p><strong>Region: </strong> {{country.region}} ({{country.subregion}})</p>
    <p><strong>Capital: </strong> {{country.capital}}</p>
    <strong>Languages: </strong>
    <ul class="card__content__list">
        <li v-for="language of country.languages" :key="language.name">
        {{language.name}}
        </li>
    </ul>
    <strong>Currencies:</strong>
    <ul class="card__content__list">
        <li v-for="currency of country.currencies" :key="currency.code">
        {{currency.name}} {{currency.symbol}}{{currency.code}}
        </li>
    </ul>
    <p><strong>Area: </strong> {{country.area}}km</p>
    <p><strong>population: </strong> {{country.population}} hab. ({{country.demonym}})</p>
    </div>
 </div>
</template>

<script>
export default {
    name:'CardCountry',
    props: {
        country: {type: Object}
    }
}
</script>

<style lang="scss" scoped>
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
.card__content__list {
  list-style: none;
}
@media only screen and (max-width: 375px) {
  .card {
    flex-direction: column;
    width: 90%;
    
    &__img {
      width: 100%;
      height: 300px;
    }
  }
}
</style>