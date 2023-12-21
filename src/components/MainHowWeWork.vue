<script>
export default {};
</script>

<template>
  <section>
    <div class="container">
      <div class="box-content flex">
        <!-- parte sinistra con foto -->
        <div class="box-img">
          <img
            src="../assets/img/stock-full-hd-11-670x450.jpg"
            alt="About-us"
          />
          <!-- logo youtube-->
          <div class="box-img-abs">
            <img
              src="../assets/img/icon-youtube-play.png"
              alt="Foto principale della sezione How we work"
            />
          </div>
          <!-- /logo youtube -->
          <!-- quadrifoglio decorativo -->
          <div class="quatrefoil">
            <img src="../assets/img/quatrefoil1.png" alt="" />
          </div>
          <!-- /quadrifoglio decorativo -->
        </div>
        <!-- /parte sinistra con foto -->

        <!-- parte destra con la info -->
        <div class="box-info">
          <h4 class="upper">how we work</h4>
          <h2>Upgrade Your Skills <span>Upgrade Your Life</span></h2>
          <p>
            Opening up more opportunities in front of you to get the ticket to
            more enjoyable door in life. Getting equipped with new skills for
            new sets of insights into your carrer. MaxCoach accompany learners
            in every stage of learning.
          </p>
          <p>
            <a href="#">
              Download free guidebook
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </a>
          </p>
        </div>
        <!-- /parte destra con le info -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
section {
  overflow: hidden;
  padding-bottom: 80px;
}
.box-content {
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 100px;
  .box-info {
    width: 35%;
    position: relative;
    h4 {
      font-size: 14px;
      color: $over-title;
      margin-bottom: 15px;
      font-weight: lighter;
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
      a {
        color: $titles;
        border-bottom: 1px solid $link-underline;
        padding-bottom: 3px;
        font-weight: bold;
      }
    }
    // cerchio decorativo tagliato
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 8px solid $circle;
      top: -110px;
      left: -15px;
      position: absolute;
      z-index: -1;
    }
  }
  .box-img {
    width: 57%;
    position: relative;
    img {
      width: 100%;
      display: block;
      border-radius: 5px;
    }
    // logo youtube
    .box-img-abs {
      width: 100px;
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    // campitura circolare in alto a sinistra
    &::after {
      content: "";
      display: block;
      width: 180px;
      height: 180px;
      background-image: url("../assets/img/maxcoach-shape-05.png");
      position: absolute;
      top: 30px;
      left: -100px;
      z-index: -1;
    }
    // campitura quadrata in basso a destra
    &::before {
      content: "";
      display: block;
      width: 170px;
      height: 170px;
      background-image: url("../assets/img/maxcoach-shape-07.png");
      position: absolute;
      bottom: -100px;
      right: -20px;
      z-index: -1;
    }
    // quadrifoglio decorativo in alto a sinistra
    .quatrefoil {
      width: 200px;
      position: absolute;
      top: -80px;
      left: -6vw;
      z-index: -1;
      transform: rotate(60deg);
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
