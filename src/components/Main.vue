<script>
import Jumbo from "./Jumbo.vue";
import MainAboutUs from "./MainAboutUs.vue";
import MainStats from "./MainStats.vue";
import MainHowWeWork from "./MainHowWeWork.vue";
import MainCourses from "./MainCourses.vue";
export default {
  components: {
    Jumbo,
    MainAboutUs,
    MainStats,
    MainHowWeWork,
    MainCourses,
  },
};
</script>

<template>
  <main>
    <Jumbo />
    <MainAboutUs />
    <MainStats />
    <MainHowWeWork />
    <MainCourses />
  </main>
</template>

<style scoped lang="scss"></style>
