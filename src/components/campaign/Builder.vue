<script>
import ComSettings from "./Settings";

export default {
  name: "Builder",
  components: { ComSettings },
  computed: {
    builderId() {
      return this.$route.params.id;
    },
  },
  watch: {
    $route(to, from) {
      console.warn(to, from);
    },
  },
};
</script>

<template>
  <div>
    <header>
      <h1>
        Builder: {{builderId}}
      </h1>
      <router-link
        :to="`/admin/campaigns/builder/${builderId}/settings`"
      >
        Settings
      </router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
