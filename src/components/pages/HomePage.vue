<template>
  <h1>{{ title }}</h1>
  <p>This is the content of the main page.</p>

  <div class="home-container">

  </div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {

    };
  },
  methods: {
  },
  props: {
    title: String
  },
};
</script>

<style scoped>

</style>
