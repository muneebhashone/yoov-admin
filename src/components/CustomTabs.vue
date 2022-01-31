<template>
  <div>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="yellow"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <!-- <v-card flat> -->
        <Editor v-model="model" />
        <!-- </v-card> -->
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import Editor from "../components/Editor.vue";
export default {
  components: { Editor },

  data() {
    return {
      tab: null,
      items: ["TC", "SC", "EN"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
