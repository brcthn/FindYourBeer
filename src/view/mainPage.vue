<template>
  <div v-if="this.beerStyle == null">
    <div class="text-center">
     <v-progress-circular size="50" indeterminate color="#7986CB"></v-progress-circular>
    </div>
  </div>
  <div v-else>
    <input type="text" v-model="style" id="searchbox"/>
    <v-container>
      <v-layout row wrap >
        <v-flex  v-for="(idx,i) in filter" v-bind:key="i" xs12 md6 xl6 >
          <v-card> 
            <v-container>
              <v-layout row wrap>
                <v-flex xs3 md3 xl6>
                  <v-img src="@/assets/beer.jpg" width="100px" height="100px" ></v-img>
                </v-flex>
                <v-flex xs9 md9 xl6>
                  <v-card-title id="text" class="font-italic text-sm-left text-center text-no-wrap">{{idx.name}}</v-card-title>
                </v-flex>
                <v-flex xs6 offset-xs6 md6 offset-md6 xl6 offset-xl6 id="detail">
                  <router-link :to="{path:'/beers/'+idx.id}">Detail</router-link>
                </v-flex>
              </v-layout>
            </v-container>
           </v-card>
        </v-flex>
      </v-layout>
     </v-container>
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
  name: "mainPage",
  // props: ["beerStyle"],
  data() {
    return {
      styleid: "",
      link: null,
      style: "",
      data: {},
      beerStyle: null
    };
  },
  created() {
    fetch(
      "https://ubiqum-cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/styles?&key=24793aca3a39bdbe91b064596cd94545",
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
        this.beerStyle = res.data;
      });
  },
  computed: {
    filter: function() {
      let beerstylesearch = this.beerStyle.filter(beer => {
        return (
          beer.name.toLowerCase().includes(this.style.toLowerCase()) ||
          this.style == ""
        );
      });
      return beerstylesearch;
    }
  }
};
</script>
<style>
#button {
  border: solid 10px#7986CB;}
#searchbox {
  position: relative;
  margin-bottom:15px;
  margin-top: 5px;
  border: 2px solid #7986CB;
  border-radius: 10px 1px;}
 #text{
  font-size: 15px;}
a{
 color:#7986CB}
</style>