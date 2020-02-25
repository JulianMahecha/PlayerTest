<template>
  <div class="top-rated p-2">
    <b-container class="mx-auto">
      <b-row class="text-center">
        <!-- Iteración -->
        <b-container class="p-2">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Name Search" v-model="filter"></b-form-input>
        </b-container>
        <b-container class="p-2">
          <b-button variant="btn btn-success" v-if="!show" @click="show = !show">Add Player</b-button>
          <b-button variant="btn btn-danger" v-if="show" @click="show = !show">Close Form</b-button>
        </b-container>
        <b-container class="p-2" v-if="show">
          <b-form @submit="addPlayer" v-if="form">
            <b-form-group
              id="input-group-1"
              label="Player Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.first_name"
                type="text"
                required
                placeholder="Enter Name"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              label="Player Last Name:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.last_name"
                type="text"
                required
                placeholder="Enter Last Name"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Player Position:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.position" required placeholder="Enter Position"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Player Team:" label-for="input-3">
              <b-form-input id="input-3" v-model="form.team.full_name" required placeholder="Enter Team"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-container>

        <!-- Información -->
        <b-container v-if="dc.name" class="p-4">
          <b-col>
            <b-card :title="dc.name" tag="article" style class="mb-2" id="dc-card">
              <b-card-text v-if="dc.height">Height: {{ dc.height }} ft</b-card-text>
              <b-card-text>Team: {{ dc.team }} {{ dc.team_ab }}</b-card-text>
              <b-card-text>Division: {{ dc.division }}</b-card-text>
              <b-card-text></b-card-text>
            </b-card>
          </b-col>
        </b-container>

        <!-- Información -->

        <b-col md="3" v-for="(player, index) of filteredPlayer" v-bind:key="player.id">
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
            <hr />
            <b-button variant="btn btn-danger" @click="del(index)">Delete</b-button>
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
      dc: {
        name: ""
      },
      link: "",
      show: false,
      form: {first_name:"",
            last_name:"",
             position:"",
            team:{
              full_name:""
            }
             
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
          this.persistence();
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
      this.dc.division = number.team.division;
    },
    del(id) {
      this.players.splice(id, 1);
      this.persistence();
    },
    persistence() {
      localStorage.setItem("players", JSON.stringify(this.players));
    },
    addPlayer(evt){
      evt.preventDefault();
      this.players.unshift(this.form);
      persistence();
      
    }
  }
};
</script>
