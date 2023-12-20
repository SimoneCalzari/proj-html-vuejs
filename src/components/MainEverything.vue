<script>
import EverythingButton from "./EverythingButton.vue";
export default {
  components: {
    EverythingButton,
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="box-content flex">
        <!-- parte sinistra con foto -->
        <div class="box-img">
          <img
            src="../assets/img/home-3-team-image.png"
            alt="Everything on Max Coach"
          />
          <div class="max-shape">
            <img src="../assets/img/maxcoach-shape-01.png" alt="" />
          </div>
          <div class="quatrefoil">
            <img src="../assets/img/quatrefoil2.png" alt="" />
          </div>
        </div>

        <!-- /parte sinistra con foto -->

        <!-- parte destra con la info -->
        <div class="box-info">
          <h4 class="upper">Everything in <span>Maxcoach</span></h4>
          <h2>We're Here To <span>Transform</span> You!</h2>
          <p>
            As learnes, people can enjoy great companionship from MaxCoach
            mentors and educators. We can help you develop and grow at your
            best.
          </p>
          <EverythingButton />
        </div>
        <!-- /parte destra con le info -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.box-content {
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 150px;
  .box-info {
    width: 40%;
    position: relative;
    h4 {
      font-size: 14px;
      color: $over-title;
      margin-bottom: 15px;
      font-weight: lighter;
      span {
        font-weight: bold;
      }
    }
    h2 {
      color: $titles;
      font-size: 34px;
      margin-bottom: 20px;
      line-height: 1.3;
      span {
        color: $search-head;
        font-weight: lighter;
      }
    }
    p {
      color: $paragraphs;
      font-size: 13px;
      line-height: 1.4;
      margin-bottom: 20px;
    }
    // cerchio
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 8px solid $circle;
      top: -100px;
      left: -45px;
      position: absolute;
    }
  }
  .box-img {
    width: 55%;
    position: relative;
    img {
      width: 100%;
      display: block;
      border-radius: 5px;
    }
    &::after {
      content: "";
      display: block;
      width: 180px;
      height: 180px;
      background-image: url("../assets/img/maxcoach-shape-05.png");
      position: absolute;
      top: 100px;
      left: -140px;
      z-index: -1;
    }
    &::before {
      content: "";
      display: block;
      width: 140px;
      height: 100px;
      background-image: url("../assets/img/maxcoach-shape-07.png");
      position: absolute;
      bottom: -100px;
      right: 100px;
      z-index: -1;
    }
    .max-shape {
      width: 130px;
      position: absolute;
      bottom: 40px;
      left: -20vw;
      img {
        width: 100%;
        display: block;
      }
    }
    .quatrefoil {
      width: 200px;
      position: absolute;
      top: 10px;
      left: -4vw;
      z-index: -1;
      transform: rotate(45deg);
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
