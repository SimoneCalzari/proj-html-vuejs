<script>
export default {
  data() {
    return {
      stats: [
        {
          num: "129+",
          text: "enrolled learners",
        },
        {
          num: "80",
          text: "finished sessions",
        },
        {
          num: "4%",
          text: "satisfaction rate",
        },
      ],
    };
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="stats flex">
        <div class="stat" v-for="stat in stats">
          <div class="number">{{ stat.num }}</div>
          <h4 class="upper">{{ stat.text }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.stats {
  justify-content: center;
  gap: 80px;
  margin-bottom: 60px;
  .stat {
    text-align: center;
    .number {
      font-size: 40px;
      color: $search-head;
      font-weight: bold;
      margin-bottom: 20px;
    }
    h4 {
      color: #727272;
    }
  }
}
</style>
