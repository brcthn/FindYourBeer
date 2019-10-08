<template>
<div>
    <v-app-bar shrink-on-scroll color="#7986CB" height="50" >
        <v-layout wrap>
                 <v-flex xs2 offset-xs10 >
             <router-link :to="{path:'/login/'}">
             <v-img class="images"
                src= "@/assets/login.png"></v-img>
                </router-link>
                 </v-flex>
                </v-layout>    
    </v-app-bar>
</div>
</template>
<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);
export default {
    name:'menuapp'
}
</script>
<style>
.images{
  width:30px;
  height:30px;  
}
#searchbox{
border: solid 1px black
}
</style>