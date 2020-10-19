<template>

    <div>
        
    <b-card
        no-body
        style="max-width: 20rem;"
        :img-src="movie.imageUrl"
        img-alt="Image"
        img-top
    >

        <b-card-body>
        <b-card-title>{{movie.title}}</b-card-title>
        <b-card-sub-title class="mb-2">{{movie.director}}</b-card-sub-title>
        <b-card-text>
        {{movie.genre}}
        </b-card-text>
        </b-card-body>

        <b-card-body class="row">
            
        <router-link class="navbar-brand btn btn-success"  :to="{ name: 'edit-movie', params: { id: movie.id }}">Edit Movie</router-link>
        <!-- <router-link class="navbar-brand btn btn-danger"  to="/delete-movie">Delete Movie</router-link> -->
       <button>Select</button>

     

        </b-card-body>

    </b-card>
    </div>
</template>

<script>
export default {
    name: 'MovieCard',


    props: {
        movie: Object
    }
}
</script>
