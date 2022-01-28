<template>
  <div id="app">
    <Header />
    <div :class="`${!isLogin ? 'app-wrapper' : ''}`">
      <Sidebar v-show="!isLogin" />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: "Prompt", sans-serif;
}

.app-wrapper {
  display: flex;
  flex: 1;
}
</style>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: { Header, Footer, Sidebar },
  data() {
    return {
      isLogin: null,
    };
  },
  created() {
    this.isLogin = this.$route.name === "Login";
    console.log(this.isLogin);
  },
};
</script>
