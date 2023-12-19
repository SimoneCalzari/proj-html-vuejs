<script>
export default {
  props: {
    linkName: String,
  },
};
</script>

<template>
  <div class="element">
    <a href="#">{{ linkName }}</a>
    <font-awesome-icon icon="fa-solid fa-chevron-down" />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.element {
  color: $links-head;
  & > *:nth-child(2) {
    font-size: 8px;
    vertical-align: middle;
  }
  a {
    color: $links-head;
    font-size: 14px;
    margin-right: 5px;
  }
}
</style>
