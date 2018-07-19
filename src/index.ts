import Vue from "vue";

import App from "./components/App.vue";
import SomeComp from "./components/SomeComp.vue";
import ButtonCounter from "./components/ButtonCounter.vue";

// const data = {
//   message: "Hello man",
// };

const vm = new Vue({
  render(h) {
    return h(App);
  },
  // data,
});

Vue.component("one", SomeComp);
Vue.component("two", ButtonCounter);

vm.$mount("#app");
