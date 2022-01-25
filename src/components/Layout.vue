<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
export default {
  name: "Layout",
  components: { Footer, Header },
  data: () => ({}),
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 58px);
  background-color: #e5e5e5;
}
</style>
