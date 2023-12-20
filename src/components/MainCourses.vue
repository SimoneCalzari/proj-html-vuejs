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
          students: "72 Students ",
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
      <div class="points flex">
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
      </div>
      <div class="all-courses">
        Control your personal preference settings to get notified about
        appropriate courses.
        <a href="#">
          View all courses
          <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
        </a>
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
    font-weight: lighter;
  }
}

.cards {
  gap: 25px;
}
.points {
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  .point {
    width: 8px;
    height: 8px;
    background-color: #d8d8d8;
    border-radius: 50%;
  }
  .point:first-child {
    width: 12px;
    height: 12px;
    background-color: black;
    border-radius: 50%;
  }
}
.all-courses {
  width: 45%;
  margin: 0 auto;
  color: $over-title;
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
  a {
    color: $titles;
    border-bottom: 1px solid $link-underline;
    padding-bottom: 1px;
    font-weight: bold;
  }
}
section {
  background-image: linear-gradient(white, #f6f6f6);
  position: relative;
  padding-bottom: 80px;
  &::after {
    content: "";
    width: 100%;
    height: 100px;
    display: block;
    position: absolute;
    background-color: #f6f6f6;
    border-radius: 100%;
    bottom: -50px;
  }
}
</style>
