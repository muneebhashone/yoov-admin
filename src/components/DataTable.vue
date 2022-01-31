<template>
  <div class="data-table-blog-list">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="itemsPerPage"
      :page.sync="page"
      @page-count="pageCount = $event"
      hide-default-footer
    >
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
    <v-pagination
      v-model="page"
      :total-visible="9"
      :length="pageCount"
    ></v-pagination>

    <v-text-field
      :value="itemsPerPage"
      label="Items per page"
      type="number"
      min="-1"
      max="15"
      @input="itemsPerPage = parseInt($event, 10)"
    ></v-text-field>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
export default {
  components: { CustomButton },
  data() {
    return {
      page: 1,
      pageCount: 0,
      items: ["5 / page", "10 / page", "20 / page"],
      itemsValue: [5, 10, 25],
      itemsPerPage: 10,
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
      desserts: Array(20)
        .fill({
          title: "Title",
          author: "Admin",
          status: "Draft",
          published: "2021/12/04 20:30:33",
          "last-edited": "2021/12/04 20:30:33",
        })
        .map((item, index) => {
          return { ...item, title: item.title + index };
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

.data-table-blog-list {
  & tbody > tr td:nth-child(1),
  & thead > tr th:nth-child(1) {
    width: 324px !important;
  }

  & thead > tr th span {
    color: #272e3b;
  }
}

button.v-pagination__item.v-pagination__item--active.primary {
  background: #e8fffd;
  border-radius: 4px;
  color: #217d8d;
}

button.v-pagination__item {
  box-shadow: none;
  border-radius: 4px;
}

button.v-pagination__navigation.v-pagination__navigation {
  box-shadow: none;
  border-radius: 4px;
}

.v-pagination__more {
  letter-spacing: 7px;
  align-items: center;
  margin: 0.5rem;
  top: -3px;
  position: relative;
}

.v-data-table-header {
  background-color: #f7f8fa;

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
