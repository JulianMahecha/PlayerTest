<template>
  <div class="top-rated p-2">
    <b-container class="mx-auto">
      <b-row class="text-center">
        <!-- Iteración -->
        <b-container class="p-2"><b-form-input size="sm" class="mr-sm-2" placeholder="Busqueda" v-model="filter"></b-form-input></b-container>
        <b-col md="3" v-for="movie of filteredMovie" v-bind:key="movie.id">
          <b-card
            :title="movie.first_name"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <!-- Texto de tarjeta -->
            <b-card-text>{{ movie.overview }}</b-card-text>
            <b-card-text>Calification: {{ movie.vote_average }}</b-card-text>

            <b-button
              :href='"https://www.themoviedb.org/movie/"+movie.id'
              variant="primary"
            >See Details</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import _ from "lodash";

export default {
  name: "popular",
  data() {
    return {
      movies: [],
      filter: ""
    };
  },
  created() {
    this.fetch();
  },
  computed: {
    filteredMovie() {
      return this.filter == ""
        ? this.movies
        : this.movies.filter(item => {
            return _.includes(item.first_name.toLowerCase(), this.filter);
          });
    }
  },
  methods: {
    fetch() {
      let results = axios
        .get(
          "https://www.balldontlie.io/api/v1/players"
        )
        .then(res => {
          this.movies = res.data.data;
          console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
