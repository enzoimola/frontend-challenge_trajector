<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import '../src/styles/main.css';

export default {
  name: 'App',
  components: {

  }
}
</script>

