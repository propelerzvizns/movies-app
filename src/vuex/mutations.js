export const mutations = {
    setMovies(state, payload){
        state.movies = payload
       },
    addMovie(state, movie) {
        state.movies.push(movie);
    },
    setSearchText(state, payload) {
       
        state.searchTerm = payload;
        
    }
}