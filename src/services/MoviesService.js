import axios from "axios";

export default class MoviesService {
    constructor(){
        this.apiClient = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/',
            thimeout: 1000
        })
        this.apiClient.interceptors.request.use(function(config){
            const token = localStorage.getItem('token');
            // console.log('interceptor', { token })
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        })
    }
    async getAll(){
        // console.log('movies.getAll()')
       const {data} =  await this.apiClient.get('movies');
      return data;
    }
    async addMovie(movie){
        console.log('movies.add()')

        const { data } = await this.apiClient.post('/movies', movie)

        return data;
    }
    async getMovie(id){
        


        const {data} = await this.apiClient.get(`/movies/${id}`)
        return data
   
    }

    async editMovie(movie){
    
        const editedMovie = await this.apiClient.put(`/movies/${movie.id}`, movie);
        return editedMovie;
       
        
    }
    async deleteMovie(id){
        
        const deletedMovie = this.apiClient.delete(`/movies/${id}`)
        return deletedMovie;
    }
}

export const moviesService = new MoviesService() 