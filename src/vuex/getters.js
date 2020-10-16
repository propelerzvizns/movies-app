export const getters = 
{
    movies: (state) => state.movies,
    filteredMovies: (state) => state.movies.filter((movie) => movie
        .title
        .toLowerCase()
        .indexOf(state.searchTerm.toLowerCase()) > -1
    )
}
 