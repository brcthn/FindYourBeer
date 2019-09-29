<template>
  <div id="app">
    <div>
      <div v-for="(idx,i) in beerByStyleId" v-bind:key="i">
        <v-card width="414px" height="115px">
          <v-row>
            <v-col>
              <v-img
                src="https://brewerydb-images.s3.amazonaws.com/beer/c4f2KE/upload_jjKJ7g-medium.png"
                width="100px"
                height="100px"
              ></v-img>
            </v-col>
            <v-col>
              <v-card-title class="font-italic text-sm-left text-center text-no-wrap">{{idx.name}}</v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "secondpage",
  props: ["styleId"],
  data() {
    return {
      beerByStyleId: null
    };
  },

  created() {
    fetch(
      `https://ubiqum-cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers?&key=24793aca3a39bdbe91b064596cd94545&styleId=${this.styleId}`,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true
        }
      }
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log("------------->" + JSON.stringify(res));
        this.beerByStyleId = res.data;
        console.log("=============>" + this.beerByStyleId);
      });
  }
};
</script>

<style>
</style>