<script>
import CoursesCard from "./CoursesCard.vue";
export default {
  data() {
    return {
      cardsData: [
        {
          img: "course-02-480x298.jpg",
          cost1: "$40",
          cost2: ".00",
          title: "Learning to Write as a Professional Author",
          lessons: "20 Lessons",
          students: "50 Students ",
          free: false,
        },
        {
          img: "stock-full-hd-03-480x298.jpg",
          cost1: "$0",
          cost2: ".00",
          title: "Customer-centric Info-Tech Strategies",
          lessons: "24 Lessons",
          students: "769 Students ",
          free: true,
        },
        {
          img: "stock-full-hd-04-480x298.jpg",
          cost1: "$19",
          cost2: ".00",
          title: "Open Programming Courses for Everyone: Python",
          lessons: "17 Lessons",
          students: "769 Students ",
          free: false,
        },
      ],
    };
  },
  components: {
    CoursesCard,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h4 class="upper">join maxcoach at best</h4>
      <h2>Latest Online <span>Courses</span></h2>
      <div class="cards flex">
        <CoursesCard v-for="cardData in cardsData" :card="cardData" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

h4 {
  font-size: 14px;
  color: $over-title;
  margin-bottom: 15px;
  font-weight: lighter;
  text-align: center;
}
h2 {
  color: $titles;
  font-size: 34px;
  margin-bottom: 20px;
  text-align: center;
  margin-bottom: 60px;
  span {
    color: $search-head;
  }
}

.cards {
  gap: 25px;
}
</style>
