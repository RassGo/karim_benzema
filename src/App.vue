<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <!-- <transition name="slide" mode="out-in"> -->
        <component :is="Component" :key="this.$route.path"></component>
      <!-- </transition> -->
    </router-view>
    
    <div id="nav">
      <transition name="view" appear enter-active-class="animated zoomInRight delay" leave-active-class="animated zoomOutLeft">
          <img alt="Vue logo" height="150px" width="150px" src="./assets/Logo_vect.png" />
      </transition>
      <router-link to="/particuliers">Particuliers</router-link> |
      <router-link to="/professionels">Professionels</router-link> |
      <router-link to="/aide">Aide</router-link> |
      <router-link to="/">Connexion</router-link> |
      <router-link to="/">Ouvrir un compte</router-link>

      <div id="HomeButton" class="center">
      <button @click="(goToSurvey)" class="button">Next</button><br />  
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  methods: {
    goToSurvey() {
      console.log("karim");
      this.$router.push("/particuliers");
    },
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: gold;
}
.delay {
  animation-delay: .5s;
}
</style>
