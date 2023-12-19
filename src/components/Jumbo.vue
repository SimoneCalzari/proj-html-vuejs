<script>
import JumboButton from "./JumboButton.vue";
export default {
  components: {
    JumboButton,
  },
};
</script>

<template>
  <section id="jumbo">
    <div class="jumbo-content flex">
      <h2>Commence business</h2>
      <h1>Distant Mentoring Program</h1>
      <JumboButton />
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
</style>
