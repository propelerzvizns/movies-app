import { moviesService } from '../services/MoviesService'
export const actions = {
    async fetchMovies(state){
        const movies = await moviesService.getAll();
        state.commit('setMovies', movies);
    },
    async addMovie(state, movie){
        const newMovie = await moviesService.addMovie(movie);
        state.commit('addMovie', newMovie)
    },
    editMovie(movie){
        moviesService.editMovie(movie)
    
       
    }
    
    
}