<template>
  <header>
    <nav>
      <ul>
        <li v-for="link in menuLinks" :key="link.path">
          <router-link :to="link.path">{{ link.label }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-component',
  data() {
    return {
      menuLinks: [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ],
    };
  },
};
</script>

<style scoped>
header {
  background-color: #f5f5f5;
  padding: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 20px;
}

nav ul li:last-child {
  margin-right: 0;
}

nav ul li a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a.router-link-active {
  color: #ff6600;
}
</style>
