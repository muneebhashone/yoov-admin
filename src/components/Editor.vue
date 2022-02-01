<template>
  <div>
    <div class="my-4">
      <label for="title">Title</label>
      <input type="text" id="title" class="form-control" />
    </div>
    <div ref="editor"></div>
  </div>
</template>

<script>
import Quill from "quill";

export default {
  props: {
    value: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      modules: {
        history: {
          delay: 2000,
          maxStack: 500,
          userOnly: true,
        },
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [
            "bold",
            "italic",
            "underline",
            { align: [] },
            "link",
            "image",
            { list: "ordered" },
            { list: "bullet" },
          ],
        ],
      },
      theme: "snow",
      formats: ["bold", "underline", "header", "italic"],
    });

    this.editor.root.innerHTML = this.value;

    this.editor.on("text-change", () => this.update());
  },

  methods: {
    update() {
      this.$emit(
        "input",
        this.editor.getText() ? this.editor.root.innerHTML : ""
      );
    },
  },
};
</script>
