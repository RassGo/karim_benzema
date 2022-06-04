<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <button @click="pushHomePage()" class="button">Home Page</button><br />
      <button @click="pushParticuliersPage()" class="button">Particuliers Page</button><br />
      <button @click="pushProfessionelsPage()" class="button">Professionels Page</button><br />
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="this.$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push("/");
  },
  methods: {
    pushHomePage() {
      this.$router.push("/");
    },
    pushParticuliersPage() {
      this.$router.push("/particuliers");
    },
    pushProfessionelsPage() {
      this.$router.push("/professionels");
    },
  },
};
</script>
<style scoped>
</style>
