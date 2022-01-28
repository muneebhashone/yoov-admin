<template>
  <div class="blogs">
    <h1>Blog posts</h1>
    <CustomButton :leftIcon="UnionIcon" text="Add new" />
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import UnionIcon from "../assets/Union.svg";
export default {
  name: "Blogs",
  components: { CustomButton },
  data() {
    return {
      UnionIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
.blogs {
  padding: 20px;
}
</style>
