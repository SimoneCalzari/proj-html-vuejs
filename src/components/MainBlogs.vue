<script>
import BlogsCard from "./BlogsCard.vue";
export default {
  data() {
    return {
      cardsData: [
        {
          img: "artist-blog-03-480x325.jpeg",
          role: "artist",
          title: "Brush Strokes Energize Trees in Pointings",
          date: "May 15,2020",
          views: "688 views",
        },
        {
          img: "artist-blog-01-480x325.jpg",
          role: "artist",
          title: "Pocket-Sized Notebooks Hold Miniature Paintings",
          date: "May 15,2020",
          views: "603 views",
        },
        {
          img: "artist-blog-02-480x325.jpg",
          role: "artist",
          title: "Connection Between Self-Portraits and Identity",
          date: "May 15,2020",
          views: "397 views",
        },
      ],
    };
  },
  components: {
    BlogsCard,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h4 class="upper">read for more joyment</h4>
      <h2>Latest From <span>Our Blogs</span></h2>
      <!-- container card -->
      <div class="cards flex">
        <BlogsCard v-for="cardData in cardsData" :card="cardData" />
      </div>
      <!-- /container card -->
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
section {
  background-color: #f6f6f6;
  padding: 80px 0;
}
</style>
