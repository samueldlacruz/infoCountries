<template>
  <header class="header">
    <h1 class="header__brand"><router-link class="header__brand__link" to="/">InfoCountries</router-link></h1>
    <nav>
      <ul class="nav-list">
        <li class="list-item"><router-link class="item__link" to="/about">about the project</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>
.header{
  background: rgba(0, 0, 0, 0.8);
  color:white;
  display: flex;
  justify-content: space-between;
}

@media (max-width:400px){
.header{
    flex-direction: column;
    justify-content: center;
  }
}

.header__brand{
  padding: .5em;
  margin:0;
}
.nav-list{
  list-style: none;
}
.list-item{
  padding: 5px;
}

.item__link{
  text-decoration: none;
  text-transform: uppercase;
  color:white;
}
.item__link:hover{
  color: #00f0ff;
}
.header__brand .header__brand__link{
  color: white;
  text-decoration: none;
}
</style>
