import axios from "axios";

export default class MoviesService {
    constructor(){
        this.apiClient = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/',
            thimeout: 1000
        })
    }
    async getAll(){
       const {data} =  await this.apiClient.get('movies');
      return data
    }
    async addMovie(movie){
        const { data } = await this.apiClient.post('/movies', movie)
        console.log(movie);
        return data;
    }
    async getMovie(id){
        // console.log(id)
        const {data} = await this.apiClient.get(`/movies/${id}`)
        return data
        // console.log(data)
    }

    editMovie(movie){
        this.apiClient.put(`/movies/${movie}`)
        console.log(movie)
    }
}

export const moviesService = new MoviesService() 