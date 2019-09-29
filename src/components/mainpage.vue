<template>
  <div v-if="this.beerStyle == null">
    <p>Loading...</p>
  </div>
  <div v-else>
    <div>
      <input type="text" v-model="style" />
      <div v-for="(idx,i) in filter" v-bind:key="i">
        <v-card width="414px" height="115px">
          <router-link :to="{path:'/beers/'+idx.id}">Detail</router-link>
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
  <!-- temporary arkayi flu yapar ve disariya tiklayinca kapanmasini saglar -->
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
  name: "mainpage",
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
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");
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
#search {
  border: solid 1px rgb(95, 45, 62);
}
#button {
  border: solid 10px black;
}
</style>