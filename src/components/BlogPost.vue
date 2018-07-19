<script>
export default {
  name: "BlogPost",
  props: ["post"],
};
</script>

<template>
  <div class="blog-post">
    <h3>{{post.title}}</h3>
    <button
      v-on:click="$emit('enlarge-text')"
    >
      Enlarge text
    </button>
    <button
      v-on:click="$emit('decrease-text')"
    >
      Decrease text
    </button>
    <div v-html="post.content"></div>
  </div>
</template>

<style scoped>
</style>
