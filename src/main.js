import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from 'vue-resource';
import {createClient} from 'contentful'
import {createClient as createManagment} from 'contentful-management'
import Vue2TouchEvents from 'vue2-touch-events'
import vueScrollto from 'vue-scrollto'

Vue.use(vueScrollto)
Vue.use(Vue2TouchEvents)
Vue.use(VueResource);

Vue.config.productionTip = false;

window.contentfulClient = createClient({
  accessToken: 'yArToh-ypjMYZtMvwAALXjoMixl50ULD1i5fdnM_WcY',
  space: 'sxdh78bp7cct'
});

window.contentfulManagementClient = createManagment({
  accessToken: 'CFPAT-auObMW69mTd4OURMNwQ3h8BF5T0Bo-b6UOcRtgyYQkg'
});
/*
contentfulClient.getEntries()
.then((response) => console.log(response.items))
.catch(console.error);
*/
new Vue({
  router,
  render: h => h(App),
  data (){
    return{
      fixedNav : false,
      hideScrollbar : false,
      hideNav : false
    }
  }
}).$mount("#app");