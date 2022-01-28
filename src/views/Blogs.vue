<template>
  <div class="blogs">
    <div class="header">
      <h1>Blog posts</h1>
      <CustomButton :leftIcon="UnionIcon" text="Add new" />
    </div>
    <div class="table-wrapper">
      <DataTable />
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import DataTable from "../components/DataTable.vue";
import UnionIcon from "../assets/Union.svg";
export default {
  name: "Blogs",
  components: { CustomButton, DataTable },
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

  & .table-wrapper {
    padding: 20px;
    background-color: white;
    margin-top: 20px;
    border-radius: 8px;
  }
}
</style>
