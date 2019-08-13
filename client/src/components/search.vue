<template>
  <div class="landing">
    <div class="search-container">
      <h2 class="search__label">Write the name of a country and discover it</h2>
      <input class="search__input" v-model="country" type="search" placeholder="Dominican republic">
      <button class="search__btn" @click.prevent="onSubmit" type="submit">search</button>
    </div>
  </div>
</template>

<script>

export default {
    name:'search',
    data(){
      return {
          country:''
      }
    },
    methods:{
      async  onSubmit(){
      if(this.country !== ''){

      //alert loading...
      this.$toasted.show('getting countries loading...🚚', {
        duration: 5000
        });

      //get rest countries
      const result = await fetch(`/api/v1/countries/${this.country}`);
      const data = await result.json();

      if(data.length){
        this.$toasted.show('getting countries 😁😊', {
          duration: 4000
          });
        this.$emit('get-to-countries',data);
        this.country = '';

      } else {
        this.$toasted.show('Oop an error occurred please specify your search😔', {
          type:'error',
          duration: 3000
          });
        this.country = '';
      }
    } else {
     this.$toasted.show('please complete the field 😔', {
       type:'error',
       duration: 3000
       });
    }
  }
  }
}
</script>

<style scoped>
.landing{
  background-image: url('../assets/fondo.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
  width: 100%;
}
.search-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1em;
}
.search__label{
  padding: 5px;
  text-align: center;
}
.search__input{
    width: 60%;
    flex:50%;
    padding: 1em;
    border: solid 1px silver;
    border-radius: .2em;
}
.search__btn{
    all: unset;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    margin-top: 10px;
    padding: 5px;
    text-align: center;
    color:white;
    border: solid 1px rgba(0, 0, 0, 0.3);
    width: 100px;
    transition: ease 1s;
}
.search__btn:hover{
    background-color: rgba(0, 0, 0, 0.8);
}
</style>
