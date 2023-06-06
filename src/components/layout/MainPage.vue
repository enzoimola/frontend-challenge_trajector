<template>
  <div>
    <home-page :title="'Welcome to the Main Page!'"></home-page>
  </div>
</template>

<script>
import HomePage from "@/components/pages/HomePage.vue";

export default {
  name: 'MainPage',
  components: {
    HomePage

  },
};
</script>
