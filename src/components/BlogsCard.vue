<script>
export default {
  props: {
    card: Object,
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="card">
    <!-- immagine -->
    <div class="box-img">
      <img
        :src="getImagePath(`../assets/img/${card.img}`)"
        alt="foto del corso"
      />
    </div>
    <!-- /immagine -->
    <!-- info -->
    <div class="box-info">
      <div class="role upper">
        {{ card.role }}
      </div>
      <h4>{{ card.title }}</h4>
      <span class="date">
        <font-awesome-icon icon="fa-regular fa-calendar" />
        {{ card.date }}
      </span>
      <span class="views">
        <font-awesome-icon icon="fa-solid fa-eye" />
        {{ card.views }}
      </span>
    </div>
    <!-- /info -->
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.card {
  width: calc((100% - 50px) / 3);
  cursor: pointer;
  .box-img {
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      display: block;
    }
  }
  .box-info {
    padding: 25px 0;

    h4 {
      font-size: 16px;
      line-height: 1.5;
      margin-top: 15px;
      margin-bottom: 25px;
    }
    .date {
      margin-right: 25px;
      font-size: 13px;
      color: $cards-icon;
      & > * {
        margin-right: 7px;
      }
    }
    .views {
      font-size: 13px;
      color: $cards-icon;
      & > * {
        margin-right: 7px;
      }
    }
    .role {
      font-size: 13px;
    }
  }
}
</style>
