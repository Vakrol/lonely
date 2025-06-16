<template>
  <router-view/>
  <ScrollingPosts />
</template>

<script>
import ScrollingPosts from './components/ScrollingPosts.vue';


export default {
  name: "App",
  components: {
    ScrollingPosts,
  },
};
</script>

<style>
@import './components/DashBoard.css';

body {
  margin: 0;
  padding: 0;
  background: #0d0d0d;
  color: white;
  font-family: 'Rubik', sans-serif;
}

.content {
  padding-top: 60px;
}
</style>
