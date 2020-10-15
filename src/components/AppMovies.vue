<template>

    <div class="row">
        <movie-card  v-for="movie in movies" :key="movie.id" :movie="movie"/>
        <!-- {{movies}} -->
    </div>
 
</template>

<script>
import { store } from '../vuex/store';

import { mapGetters } from 'vuex'
import MovieCard from './MovieCard'

// import {moviesService} from '../services/MoviesService'
export default {
    components:{
        MovieCard,
    },

    computed:{
        
        ...mapGetters(['movies'])
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