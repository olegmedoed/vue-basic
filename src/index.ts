import Vue from "vue";

import App from "./components/App.vue";
import router from "./router";

// const data = { message: "Hello man", };


const vm = new Vue({
  router,
  render(h) {
    return h(App);
  },
  // data,
});

vm.$mount("#app");
