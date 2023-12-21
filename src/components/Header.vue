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
    <!-- /container per dare margine laterale -->
    <div class="head-container">
      <!-- container del contenuto  -->
      <div class="head-content flex">
        <HeaderNav />
        <HeaderLogo />
        <HeaderSearch />
      </div>
      <!-- /container del contenuto  -->
    </div>
    <!-- container per dare margine laterale -->
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: white;
  height: 80px;
  .head-container {
    width: 85%;
    margin: 0 auto;
    height: 100%;
    .head-content {
      height: 100%;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
