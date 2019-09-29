<template>
  <div id="App">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
import { mapState, mapGetters, mapActions } from "vuex";
import VueRouter from "vue-router";

export default {
  name: "App",
  data() {
    return {};
  }
};
</script>





