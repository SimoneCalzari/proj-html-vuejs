<script>
export default {};
</script>

<template>
  <section>
    <div class="container">
      <div class="box-content flex">
        <!-- parte sinistra con le info -->
        <div class="box-info">
          <h4 class="upper">Everything in <span>maxcoach</span></h4>
          <h2>Learn about our <span>Work Culture</span> at MaxCoach</h2>
          <p>
            Spend some time to visit our website or head office anda discover
            our current courses, enrollmente procedure, and registration
            deadline. We're opening new classes every beginning of each month.
          </p>
          <p>
            Have questions?
            <a href="#">
              Get Free Guide
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </a>
          </p>
        </div>
        <!-- /parte sinistra con le info -->

        <!-- parte destra con la foto -->
        <div class="box-img">
          <img
            src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
            alt="About-us"
          />
          <!-- immagine volante ragazza col pc -->
          <div class="box-img-abs">
            <img
              src="../assets/img/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg"
              alt="About-us-2"
            />
          </div>
          <!-- /immagine volante ragazza col pc -->
          <!-- immagine volante max coach shape -->
          <div class="box-shape-abs">
            <img
              src="../assets/img/maxcoach-shape-02.png"
              alt="shape-maxcoach"
            />
          </div>
          <!-- /immagine volante max coach shape -->
        </div>
        <!-- /parte destra con la foto -->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.box-content {
  justify-content: space-between;
  align-items: start;
  margin-top: 150px;
  margin-bottom: 100px;
  .box-info {
    width: 35%;
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
      }
    }
    p {
      color: $paragraphs;
      font-size: 13px;
      line-height: 1.4;
      margin-bottom: 20px;
      a {
        color: $search-head;
        border-bottom: 1px solid $link-underline;
        padding-bottom: 3px;
        font-weight: bold;
      }
    }
    &::after {
      content: "";
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 8px solid $circle;
      top: -15px;
      right: -75px;
      position: absolute;
    }
  }
  .box-img {
    width: 50%;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
    & > img {
      border-radius: 10px;
    }
    .box-img-abs {
      width: 190px;
      height: 190px;
      border-radius: 10px;
      overflow: hidden;
      position: absolute;
      top: -90px;
      right: -70px;
    }
    .box-shape-abs {
      position: absolute;
      width: 120px;
      height: 120px;
      bottom: -90px;
      right: 50px;
    }
    &::after {
      content: "";
      display: block;
      width: 150px;
      height: 130px;
      background-image: url("../assets/img/maxcoach-shape-08.png");
      position: absolute;
      transform: rotateX(180deg);
      bottom: -5px;
      left: 5px;
      z-index: -1;
    }
    &::before {
      content: "";
      display: block;
      width: 170px;
      height: 170px;
      background-image: url("../assets/img/maxcoach-shape-07.png");
      position: absolute;
      top: -75px;
      right: 15px;
      z-index: -1;
    }
  }
}
</style>
