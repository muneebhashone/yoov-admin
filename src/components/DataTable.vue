<template>
  <v-data-table :headers="headers" :items="desserts" :items-per-page="5">
    <template v-slot:item="row">
      <tr>
        <td>{{ row.item.title }}</td>
        <td>{{ row.item.author }}</td>
        <td>{{ row.item.status }}</td>
        <td>{{ row.item.published }}</td>
        <td>{{ row.item["last-edited"] }}</td>
        <td>
          <div class="data-actions">
            <CustomButton
              @onClick="onEditClick(row.item)"
              :noBorder="true"
              :invert="true"
              text="Edit"
            />
            <CustomButton
              @onClick="onDuplicateClick(row.item)"
              :noBorder="true"
              :invert="true"
              text="Duplicate"
            />
            <CustomButton
              @onClick="onDeleteClick(row.item)"
              :noBorder="true"
              :invert="true"
              text="Delete"
            />
          </div>
        </td>
      </tr> </template
  ></v-data-table>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  data() {
    return {
      headers: [
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "Author", value: "author" },
        { text: "Status", value: "status" },
        { text: "Published", value: "published" },
        { text: "Last edited", value: "last-edited" },
        {
          text: "Actions",
          value: "actions",
        },
      ],
      desserts: Array(10).fill({
        title: "Title",
        author: "Admin",
        status: "Draft",
        published: "2021/12/04 20:30:33",
        "last-edited": "2021/12/04 20:30:33",
      }),
    };
  },
  methods: {
    onEditClick(item) {
      console.log(item);
    },
    onDeleteClick(item) {
      console.log(item);
    },
    onDuplicateClick(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="scss">
.data-actions {
  display: flex;
}

.v-data-table-header {
  background-color: #f7f8fa;

  & tbody > tr > td:nth-child(1) {
    width: 30%;
  }

  & tr th {
    text-align: left;
    & span {
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
    }
  }
}
</style>
