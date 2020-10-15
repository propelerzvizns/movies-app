<template>
  <div class="addMovie">
    <h1 v-if="!this.$route.params.id">Add Movie</h1>
    <h1 v-else>Edit Movie</h1>
    <form @submit.prevent="onSubmit()">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="title" placeholder="Enter title" v-model="movie.title">
  
  </div>
    <div class="form-group">
    <label for="director">Director</label>
    <input type="text" class="form-control" id="director" aria-describedby="director" placeholder="Enter director" v-model="movie.director">
  
  </div>
    <div class="form-group">
    <label for="imageUrl">Image url</label>
    <input type="text" class="form-control" id="imageUrl" aria-describedby="imageUrl" placeholder="Enter image url" v-model="movie.imageUrl">
  
  </div>
    <div class="form-group">
    <label for="duration">Duration</label>
    <input type="text" class="form-control" id="duration" aria-describedby="duration" placeholder="Enter duration" v-model="movie.duration">
  
  </div>
    <div class="form-group">
    <label for="releaseDate">Release Date</label>
    <input type="text" class="form-control" id="releaseDate" aria-describedby="releaseDate" placeholder="Enter releaseDate" v-model="movie.releaseDate">
  
  </div>
  <div class="form-group">
    <label for="genre">Genre</label>
    <input type="text" class="form-control" id="genre" aria-describedby="genre" placeholder="Enter genre" v-model="movie.genre">
  
  </div>
  

  <button type="submit" class="btn btn-primary">Submit</button>

</form>
  </div>
</template>
    
<script>


import { moviesService } from '../services/MoviesService'
import { mapActions, mapGetters} from 'vuex'
export default {
  name: 'AddMovie',
  data() {
    return {
    movie: {
      title: '', 
      director: '',
      imageUrl: '',
      duration: '',
      releaseDate: '',
      genre: ''
    }
    }
  },

  computed: {
    ...mapGetters(['movies']),
  },


  methods: {
    ...mapActions(['addMovie', 'editMovie']),
 


    onSubmit(){
         if(this.$route.params.id){
           this.editMovie(this.movie)
          //  this.$router.push('movies')
         } else {

           this.addMovie(this.movie);
            this.$router.push('movies')
         }
    }
  },

 async mounted() {
    // console.log('add movie mounted', { id: this.$route.params.id })
    // if(this.$route.params.id) {
    //   const movie = this.movies.find(movie => movie.id == this.$route.params.id);
    //   console.log('FOUND MOVIE', { movie })
    //   this.movie = {...this.movies.find(movie=>movie.id == this.$route.params.id)}
    // }
        this.movie = await moviesService.getMovie(this.$route.params.id)
    // console.log(movie);

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
