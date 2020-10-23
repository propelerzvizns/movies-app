import { moviesService } from '../services/MoviesService'
export const actions = {
    async fetchMovies(state){
        // console.log('fetch movies')
        const {data, /*...moviesPage*/ } = await moviesService.getAll();
        state.commit('setMovies', data);
        // state.commit('setMoviesPageData', moviesPage);
    },
    async addMovie(state, movie){
        const newMovie = await moviesService.addMovie(movie);
        state.commit('addMovie', newMovie)
    },
    async editMovie(state, movie){
       console.log(movie);
        // state.commit('editMovie', movie)
        await moviesService.editMovie(movie)
    
       
    },
    async deleteMovie(state, id){
        await moviesService.deleteMovie(id);
        const {data, /*...moviesPage*/ } = await moviesService.getAll();
        state.commit('setMovies', data)
    }
    
    
}