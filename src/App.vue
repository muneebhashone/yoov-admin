<template>
  <div id="app">
    <v-app>
      <Header />
      <div :class="`${!isLogin ? 'app-wrapper' : ''}`">
        <Sidebar v-show="!isLogin" />
        <router-view />
      </div>
      <Footer />
    </v-app>
  </div>
</template>

<style lang="scss">
* {
  font-family: "Prompt", sans-serif;
}

.w-100 {
  width: 100%;
}

a {
  text-decoration: none;
}

.app-wrapper {
  display: flex;
  flex: 1;
}

.v-tabs-slider {
  background-color: #2b425e !important;
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
