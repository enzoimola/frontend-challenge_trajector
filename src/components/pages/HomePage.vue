<template>


  <div class="container">
    <h1>Traffic light</h1>
    <p>Build a traffic light in React where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely</p>
    <div class="traffic-light">
      <div class="red" :class="{ active: activeLight === 'red'}"></div>
      <div class="yellow" :class="{ active: activeLight === 'yellow'}"></div>
      <div class="green" :class="{ active: activeLight === 'green'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {
      activeLight: 'green'
    };
  },
  mounted() {
    this.onStartTrafficLight();
  },
  methods: {
    onStartTrafficLight () {
      setInterval(() => {
        switch (this.activeLight) {
          case "green":
            this.activeLight = 'yellow';
            setTimeout(() => {
                  this.activeLight = 'red';
                }, 500)
            break;
          case 'yellow':
            this.activeLight = 'red';
            setTimeout(() => {
              this.activeLight = 'green';
            }, 4000)
                break;
          case 'red':
            this.activeLight = 'green';
            setTimeout(() => {
              this.activeLight = 'yellow';
            }, 3000)
            break;
        }
      }, 3000)
    }
  },
};
</script>

<style scoped>

.container {
  padding: 10px;
  text-align: center;
}

.traffic-light {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.traffic-light div {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
}

.active {
  box-shadow: 0 0 20px rgba(0 0.5 0)
}

.red {
  background-color: red;
}

.yellow {
  background-color: yellow;
}

.green {
  background-color: green;
}
</style>
