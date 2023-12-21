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
        <!-- card con statistiche -->
        <div class="stat" v-for="stat in stats">
          <div class="number">{{ stat.num }}</div>
          <h4 class="upper">{{ stat.text }}</h4>
        </div>
        <!-- /card con statistiche -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

section {
  position: relative;
  overflow-y: hidden;
  padding-bottom: 125px;
  // cerchio tagliato in fondo alla sezione
  .container::after {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid $circle;
    position: absolute;
    bottom: -40px;
    left: 58%;
  }
}
.stats {
  justify-content: center;
  gap: 80px;

  .stat {
    text-align: center;
    .number {
      font-size: 40px;
      color: $search-head;
      font-weight: bold;
      margin-bottom: 30px;
    }
    h4 {
      color: #727272;
    }
  }
}
</style>
