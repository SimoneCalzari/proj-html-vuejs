<script>
import NavElement from "./NavElement.vue";
export default {
  data() {
    return {
      links: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
    };
  },
  components: {
    NavElement,
  },
};
</script>

<template>
  <nav>
    <ul class="flex">
      <li v-for="link in links">
        <NavElement :linkName="link" />
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
ul {
  gap: 25px;
}
</style>
