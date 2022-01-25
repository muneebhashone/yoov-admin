<template>
  <header><img height="28px" :src="require('../assets/logo.svg')" /></header>
</template>

<script>
export default {
  name: "Header",
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
