<script>
export default {
  name: "ButtonCounter",
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<template>
  <button
    class="ButtonCounter"
    v-on:click="count++"
  >
    You clicked me {{count}} times
  </button>
</template>

<style scoped>
.ButtonCounter {
  display: block;
}
</style>
