<script>
import Jumbo from "./Jumbo.vue";
import MainAboutUs from "./MainAboutUs.vue";
import MainStats from "./MainStats.vue";
import MainHowWeWork from "./MainHowWeWork.vue";
export default {
  components: {
    Jumbo,
    MainAboutUs,
    MainStats,
    MainHowWeWork,
  },
};
</script>

<template>
  <main>
    <Jumbo />
    <MainAboutUs />
    <MainStats />
    <MainHowWeWork />
  </main>
</template>

<style scoped lang="scss"></style>
