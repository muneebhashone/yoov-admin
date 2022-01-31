<template>
  <div class="data-table-blog-list">
    <div class="table-details-row">
      <p class="total-paragraph">{{ `Total ${items.length}` }}</p>
      <v-pagination
        v-model="page"
        :total-visible="9"
        :length="pageCount"
      ></v-pagination>
      <select v-model="itemsPerPage">
        <option v-for="item of itemsPerPageOptions" :key="item" :value="item">
          {{ `${item} / page` }}
        </option>
      </select>
    </div>
    <v-data-table
      :headers="headers"
      :items="items"
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
    <div class="table-details-row">
      <p class="total-paragraph">{{ `Total ${items.length}` }}</p>
      <v-pagination
        v-model="page"
        :total-visible="9"
        :length="pageCount"
      ></v-pagination>
      <select v-model="itemsPerPage">
        <option v-for="item of itemsPerPageOptions" :key="item" :value="item">
          {{ `${item} / page` }}
        </option>
      </select>
    </div>
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
      itemsPerPageOptions: [5, 10, 25],
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
      items: Array(50)
        .fill({
          title: "Title",
          author: "Admin",
          status: "Draft",
          published: "2021/12/04 20:30:33",
          "last-edited": "2021/12/04 20:30:33",
        })
        .map((item, index) => {
          return { ...item, title: `${item.title} ${index}` };
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

  & tbody > tr:last-child td {
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
  }

  & thead > tr th span {
    color: #272e3b;
  }

  & select {
    border: 1px solid #c9cdd4;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    font-family: Prompt;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #272e3b;
  }
}

.table-details-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;

  & nav {
    margin-left: auto;
    margin-right: 25px;
  }
}

.total-paragraph {
  font-family: Prompt;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #272e3b;
}

button.v-pagination__item.v-pagination__item--active.primary {
  background: #e8fffd !important;
  border-radius: 4px;
  color: #217d8d !important;
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
  align-items: center !important;
  margin: 0.5rem !important;
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
