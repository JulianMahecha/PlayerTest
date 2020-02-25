<template>
  <div class="top-rated p-2">
    <b-container class="mx-auto">
      <b-row class="text-center">
        <!-- Iteración -->
        <b-container class="p-2">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Busqueda" v-model="filter"></b-form-input>
        </b-container>

        <!-- Información -->
        <b-container v-if="dc.name" class="p-3">
          <b-col>
            <b-card
            :title=dc.name
            tag="article"
            style=""
            class="mb-2"
            id="dc-card"
          >
          <b-card-text v-if="dc.height">Height: {{ dc.height }} ft</b-card-text>
          <b-card-text>Team: {{ dc.team }} {{ dc.team_ab }} </b-card-text>
          <b-card-text></b-card-text>
          </b-card>
          
          </b-col>
        </b-container>

        <!-- Información -->

        <b-col md="3" v-for="player of filteredPlayer" v-bind:key="player.id">
          <b-card
            :title="player.first_name + ' ' + player.last_name"
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <!-- Texto de tarjeta -->
            <b-card-text>{{ player.overview }}</b-card-text>
            <b-card-text>Position: {{ player.position }}</b-card-text>
            <b-card-text>Team: {{ player.team.full_name }}</b-card-text>
            <b-button variant="btn btn-primary" @click="details(player)">See Details</b-button>
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
      players: [],
      filter: "",
      dc:{
        "name":""
      }
    };
  },
  created() {
    this.fetch();
  },
  computed: {
    filteredPlayer() {
      return this.filter == ""
        ? this.players
        : this.players.filter(item => {
            return _.includes(item.first_name.toLowerCase(), this.filter);
          });
    }
  },
  methods: {
    fetch() {
      let results = axios
        .get("https://www.balldontlie.io/api/v1/players")
        .then(res => {
          this.players = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    details(number) {
      this.dc.name = number.first_name + " " + number.last_name;
      this.dc.height = number.height_feet;
      this.dc.team = number.team.full_name;
      this.dc.team_ab = number.team.abbreviation;
    }
  }
};
</script>
