<template>
<div>
    <div class="row" v-if="filteredMovies.length">
        <movie-card  v-for="movie in filteredMovies" :key="movie.id" :movie="movie" @delete-movie="handleDeleteMovie"/>
    </div>
    <div v-else>
        <p style="color: white; background-color:red">there is no movies for current input</p>
    </div>
    </div>
 
</template>

<script>
import { store } from '../vuex/store';

import { mapGetters, mapActions } from 'vuex'
import MovieCard from './MovieCard'

// import {moviesService} from '../services/MoviesService'
export default {
    components:{
        MovieCard,
    },

    computed:{
        
        ...mapGetters(['movies','filteredMovies']),
    },
    methods:{
        ...mapActions(['deleteMovie']),
        handleDeleteMovie(id){
            this.deleteMovie(id);
            
            
        }
    },

    created(){
        // console.log('created', {
        //     moviesComputed: this.movies,
        //     moviesStore: store.getters.movies
        // })
        // this.movies = await moviesService.getAll();

    },
    mounted() {
        // console.log('app movies mounted', {movies: this.movies})
    },
    beforeRouteEnter(to, from, next){
        //4ti vuex korak
        // console.log('dispatch action')
        store.dispatch('fetchMovies').then(()=> {
            next();
        })
        
    }

        
          
     

}
</script>

<style scoped>

</style>