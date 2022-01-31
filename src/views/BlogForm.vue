<template>
  <div class="blogs">
    <div class="header">
      <router-link :to="{ name: 'Blogs' }">
        <CustomButton
          :leftIcon="backIcon"
          text="Back"
          :invert="true"
          :noBorder="true"
        />
      </router-link>
      <div class="d-flex">
        <CustomButton text="Preview" :invert="true" :noBorder="true" />
        <CustomButton text="Save as draft" class="mr-3" :invert="true" />
        <CustomButton text="Publish" />
      </div>
    </div>
    <v-row>
      <v-col lg="9" class="d-flex">
        <Wrapper class="flex-grow-1">
          <CustomTabs />
        </Wrapper>
      </v-col>
      <v-col lg="3" class="d-flex">
        <div class="flex-grow-1">
          <Wrapper>
            <h3>Post thumbnail</h3>
            <Uploader />
          </Wrapper>
          <Wrapper
            ><h3>Prodcut</h3>
            <div class="mt-4">
              <select class="form-control" name="" id="">
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </div>
          </Wrapper>
          <Wrapper>
            <h3>SEO</h3>
            <div class="mt-4">
              <label for="slug">Slug</label>
              <input type="text" id="slug" class="form-control" />
            </div>
            <div class="mt-4">
              <label for="meta">Meta title</label>
              <input type="text" id="meta" class="form-control" />
            </div>
            <div class="mt-4">
              <label for="meta">Meta description</label>
              <textarea
                rows="5"
                cols="5"
                type="text"
                id="meta"
                class="form-control"
              />
            </div>
            <div class="mt-4">
              <label for="kw">Keywords</label>
              <input
                type="text"
                placeholder="Separate keywords with comma"
                id="kw"
                class="form-control"
              />
            </div>
          </Wrapper>
          <Wrapper
            ><h3>Facebook</h3>
            <Uploader />
            <div class="mt-4">
              <label for="slug">Slug</label>
              <input type="text" id="slug" class="form-control" />
            </div>
            <div class="mt-4">
              <label for="meta">Meta title</label>
              <input type="text" id="meta" class="form-control" />
            </div>
          </Wrapper>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import Wrapper from "../components/Wrapper.vue";
import CustomTabs from "../components/CustomTabs.vue";
import Uploader from "../components/Uploader.vue";
import backIcon from "../assets/back.svg";

export default {
  name: "BlogForm",
  components: { CustomButton, Wrapper, CustomTabs, Uploader },
  data() {
    return {
      backIcon,
      model: null,
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

.form-control {
  width: 100%;
  background: #ffffff;
  border: 1px solid #c9cdd4;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
}
input.form-control {
  height: 40px;
}
</style>
