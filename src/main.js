
import Vue from "vue";
import App from "./App.vue";
import vuetify from './plugins/vuetify';
import store from './store';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import secondpage from "./components/secondpage.vue";
import mainpage from "./components/mainpage.vue";


Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/beers/:styleId',
    component: secondpage,
    props: true,
  },
  {
    path: '/',
    components: {
      default: mainpage
    },
    props: true
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
