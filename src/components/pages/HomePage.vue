<template>
  <div class="home-container">
    <div>
      <div class="home-container__titles">
        <h1>{{ title }}</h1>
        <p>This is the content of the main page.</p>
      </div>


    </div>
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

.home-container__titles {
  text-align: center;
}

</style>
