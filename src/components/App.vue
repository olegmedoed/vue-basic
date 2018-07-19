<script>
import SomeComp from "./SomeComp";
import ButtonCounter from "./ButtonCounter";
import BlogPost from "./BlogPost";

export default {
  name: "App",

  components: { SomeComp, ButtonCounter, BlogPost },

  data() {
    return {
      scream: true,
      postFontSize: 1,
      isActive: true,
      message: "App message",
      items: ["Oleg", "Ania", "Jeka", "Jana"],
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        {
          id: 3,
          title: "Why Vue is so fun",
          content: "<ul><li>Hello</li><li>One</li></ul>",
        },
      ],
    };
  },

  computed: {
    reverseMessage() {
      return this.message
        .split("")
        .reverse()
        .join(" ");
    },
    now() {
      return new Date();
    },
  },

  methods: {
    reverseItems() {
      this.items.reverse();
    },

    now() {
      return new Date();
    },
    toggleActivity() {
      this.isActive = !this.isActive;
    },

    enlargeText() {
      this.postFontSize + 0.1;
    },

    decreaseText() {
      this.postFontSize - 0.1;
    },
  },
};
</script>

<template>
  <div v-bind:class="{active: isActive}">
    <h1 v-if="scream">{{message}} - {{reverseMessage}}</h1>
    <h2>Now: {{now}}</h2>
    <input type="text" v-model="message">
    <some-comp v-bind:items="items"></some-comp>
    <button v-on:click="reverseItems">Reverse items</button>
    <button v-on:click="toggleActivity">Toggle activity</button>
    <two></two>
    <two></two>
    <div :style="{fontSize: postFontSize + 'em'}">
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
        v-on:enlarge-text="{{this.enlargeText()}}"
        v-on:decrease-text="decreaseText"
      >
      </blog-post>
    </div>
  </div>
</template>

<style scoped>
.active {
  color: red;
}
</style>
