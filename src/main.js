
import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify';
import store from './store';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import secondPage from "./view/secondPage.vue";
import mainPage from "./view/mainPage.vue";
import thirdPage from "./view/thirdPage.vue";
import menuApp from "./components/menuApp.vue";
import login from "./view/login.vue";
import firebase from 'firebase';
import 'firebase/firestore';
Vue.config.productionTip = false;
import firebaseConfig from './firebaseConfig';

 const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: mainPage,
        a: menuApp
      },
      props: true
    },
    {
      path: '/beers/:styleId',
      component:secondPage,
      props: true,
    },
    {
      path: '/beers/:styleId/:beerId',
      component:thirdPage,  
      props: true,
    },
    {
    path:'/login',
    component:login 
    },
    
  ]
})
router.push('/');
new Vue({
 vuetify,
  render: h => h(App),
  store,
  router
}).$mount("#app");
