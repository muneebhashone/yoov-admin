<template>
  <div class="blogs">
    <div class="header">
      <h1>Blog posts</h1>
      <CustomButton :leftIcon="UnionIcon" text="Add new" />
    </div>
    <Wrapper>
      <DataTable />
    </Wrapper>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import Wrapper from "../components/Wrapper.vue";
import DataTable from "../components/DataTable.vue";
import UnionIcon from "../assets/Union.svg";

export default {
  name: "Blogs",
  components: { CustomButton, DataTable, Wrapper },
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
  background-color: #e5e5e5;
  flex: 1;

  & .header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
