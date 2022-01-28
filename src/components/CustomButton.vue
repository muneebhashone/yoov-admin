<template>
  <button @click="$emit('onClick')" :class="getClass()">
    <component v-show="leftIcon" :is="leftIcon" :class="getClass()" />
    <span v-show="text">{{ text }}</span>
    <component v-show="rightIcon" :is="rightIcon" :class="getClass()" />
  </button>
</template>

<script>
export default {
  props: ["invert", "noBorder", "leftIcon", "rightIcon", "text"],
  methods: {
    getClass() {
      let classes = [""];

      if (this.$props.invert) {
        classes.push("invert");
      }

      if (this.$props.noBorder) {
        classes.push("no-border");
      }

      return classes.join(" ").trim();
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  color: white;
  background: #2b425e;
  border-radius: 4px;
  padding: 12px 20px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.9;
  }

  & span {
    font-weight: 500;
    font-size: 16px;
  }

  &.invert {
    color: #2b425e;
    background: white;
    border: 1px solid #2b425e;

    & path {
      fill: #2b425e;
    }
  }

  &.no-border {
    border-width: 0px;
    background: transparent;
  }
}
</style>
