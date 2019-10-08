<template>
  <div>
<div v-if="this.beerByStyleId == null">
    <div class="text-center">
     <v-progress-circular size="50" indeterminate color="#7986CB"></v-progress-circular>
    </div>
  </div>
    <div v-else>

   <v-img class="back" src= "@/assets/back.png" @click="$router.go(-1)" ></v-img>
    <!-- <v-flex v-for="(idx,i) in beerByStyleId" v-bind:key="i"> -->
       <v-container>
        <v-layout row wrap>
         <v-flex v-for="(idx,i) in beerByStyleId" v-bind:key="i" xs12 md6 xl6>
            <v-card >
              <v-container>
                <v-layout row wrap>
                  <v-flex xs4 md4 xl4>
                    <div v-if="idx.labels != null">
                      <v-img v-bind:src="`${idx.labels.icon}`" width="100px" height="100px"></v-img>
                    </div>
                    <div v-else>
                        <v-img src="@/assets/beer.jpg" width="100px" height="100px"></v-img>
                    </div>
                  </v-flex>
                  <v-flex xs8 md8 xl4>
                    <v-card-title class="font-italic text-sm-left text-center text-no-wrap">{{idx.name}}</v-card-title>
                  </v-flex>
                  <v-flex xs6 offset-xs6 md6 offset-md6  xl6 offset-xl6  id="detail">
                    <router-link :to="{path:'/beers/'+idx.styleId+'/'+idx.id}">Detail</router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
         </v-flex>
        </v-layout>
      </v-container>
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
        // console.log("------------->" + JSON.stringify(res));
        this.beerByStyleId = res.data;
        // console.log("=============>" + this.beerByStyleId);
      });
  }
};
</script>
<style>
.back{
  width: 25px;
  height: 25px;
}
</style>