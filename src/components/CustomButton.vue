<template>
  <button :class="invert ? 'invert' : ''">
    <component
      v-show="leftIcon"
      :is="leftIcon"
      :class="invert ? 'invert' : ''"
    />
    <span v-show="text">{{ text }}</span>
    <component
      v-show="rightIcon"
      :is="rightIcon"
      :class="invert ? 'invert' : ''"
    />
  </button>
</template>

<script>
export default {
  props: ["invert", "leftIcon", "rightIcon", "text"],
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
  gap: 12px;

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
}
</style>
