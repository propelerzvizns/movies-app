<template>
  <div id="app">
    
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/movies">Movies</router-link> 
        <router-link class="navbar-brand"  to="/add-movie">Add Movie</router-link>
      </nav>
      <movie-search/>
    
    <router-view/>
  </div>
</template>
<script>
import MovieSearch from './components/MovieSearch'
export default {
  name:'App',
  components: {
    MovieSearch
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
