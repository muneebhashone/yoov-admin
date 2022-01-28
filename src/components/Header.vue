<template>
  <header>
    <Logo height="28px" />
  </header>
</template>

<script>
import Logo from "../assets/logo.svg";
export default {
  name: "Header",
  components: { Logo },
  data() {},
};
</script>

<style scoped>
header {
  height: 56px;
  background-color: #2b425e;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
</style>
