<template>
    <div>
        <table>
            <tr>
                
                <th>title</th>
                <th>director</th>
                <th>imageUrl</th>
                <th>duration</th>
                <th>releaseDate</th>
                <th>genre</th>
            </tr>
            <tr v-for="movie in movies" :key="movie.id">
                <td>{{movie.title}}</td>
                <td>{{movie.director}}</td>
                <td>{{movie.imageUrl}}</td>
                <td>{{movie.duration}}</td>
                <td>{{movie.releaseDate}}</td>
                <td>{{movie.genre}}</td>
            
            </tr>
        </table>
       
    </div>
</template>

<script>
import {moviesService} from '../services/MoviesService'
export default {
    data(){
        return {
            movies: []
        }
    },
   async created(){
       
          this.movies = await moviesService.getMovies();
        console.log(this.movies)
          
     
    }
}
</script>

<style scoped>

</style>