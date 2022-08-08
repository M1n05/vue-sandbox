import Vue from "vue";
import App from "./App.vue";
import { VueQueryPlugin } from "vue-query";

Vue.config.productionTip = false;
Vue.use(VueQueryPlugin);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
