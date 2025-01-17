import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount("#app");
