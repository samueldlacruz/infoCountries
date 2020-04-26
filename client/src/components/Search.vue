<template>
    <div class="search">
      <input 
      type="search"
      v-model="nameCountry"
      placeholder="Name country" 
      class="search__input">
    </div>
</template>

<script>

export default {
    name: 'Search',
    data() {
      return {
       nameCountry: ''
      }
    },
    watch: {
      nameCountry(newValue) {
        if (newValue !== '' && newValue !== null) {
          this.$emit('get-countries', newValue)
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.search{
  background-image: url("~@/assets/fondo.jpg");
  height: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__input {
    margin: .5em;
    padding: 1em;
    outline: none;
    border: none;
    width: 35%;
    color: black;
    background-color: rgba(250, 250, 250, 0.8);
    border-radius: 15px;
  }
}
</style>