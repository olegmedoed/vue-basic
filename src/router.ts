import Vue from "vue";
import VueRouter from "vue-router";

import Builder from "./components/campaign/Builder.vue";
import Settings from "./components/campaign/Settings.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/admin/campaigns/builder/:id",
      component: Builder,
      children: [
        {
          name: "CampaignSettings",
          path: "settings",
          component: Settings,
        } as any,
      ],
    },
  ],
});
