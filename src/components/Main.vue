<script>
import Jumbo from "./Jumbo.vue";
import MainAboutUs from "./MainAboutUs.vue";
import MainStats from "./MainStats.vue";
import MainHowWeWork from "./MainHowWeWork.vue";
import MainCourses from "./MainCourses.vue";
import MainTestimonials from "./MainTestimonials.vue";
import MainEverything from "./MainEverything.vue";
import MainBlogs from "./MainBlogs.vue";
import MainNewsletter from "./MainNewsletter.vue";
export default {
  components: {
    Jumbo,
    MainAboutUs,
    MainStats,
    MainHowWeWork,
    MainCourses,
    MainTestimonials,
    MainEverything,
    MainBlogs,
    MainNewsletter,
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
    <MainTestimonials />
    <MainEverything />
    <MainBlogs />
    <MainNewsletter />
  </main>
</template>

<style scoped lang="scss"></style>
