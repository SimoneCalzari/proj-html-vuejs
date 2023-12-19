<script>
import JumboButton from "./JumboButton.vue";
import JumboSmallMenu from "./JumboSmallMenu.vue";
export default {
  components: {
    JumboButton,
    JumboSmallMenu,
  },
};
</script>

<template>
  <section id="jumbo">
    <div class="jumbo-content flex">
      <div class="jumbo-info flex">
        <h2>Commence business</h2>
        <h1>Distant Mentoring Program</h1>
        <JumboButton />
      </div>
      <div class="jumbo-menu-small">
        <JumboSmallMenu />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#jumbo {
  height: 35vw;
  background-image: url("../assets/img/home-3-hero-bg.jpg");
  background-size: cover;
  .jumbo-content {
    height: 100%;
  }
  .jumbo-info {
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 40px;
      color: white;
      margin-bottom: 25px;
    }
    h2 {
      font-size: 22px;
      color: white;
      margin-bottom: 10px;
    }
  }
}
</style>
