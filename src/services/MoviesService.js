import axios from "axios";

export default class MoviesService {
    async getMovies(){
       const {data} =  await axios.get('http://localhost:3000/api/movies');
       return data
      
       
    }
}

export const moviesService = new MoviesService() 