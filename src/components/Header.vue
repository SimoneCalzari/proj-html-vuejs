<script>
import HeaderNav from "./HeaderNav.vue";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderSearch from "./HeaderSearch.vue";
export default {
  components: {
    HeaderNav,
    HeaderLogo,
    HeaderSearch,
  },
};
</script>

<template>
  <header>
    <div class="head-container">
      <div class="head-content flex">
        <HeaderNav />
        <HeaderLogo />
        <HeaderSearch />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: white;
  height: 80px;
  .head-container {
    width: 85%;
    margin: auto;
    height: 100%;
    .head-content {
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
