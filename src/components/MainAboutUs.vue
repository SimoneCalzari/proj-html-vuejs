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
        <!-- parte destra con la foto -->
        <div class="box-img">
          <img
            src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg"
            alt="About-us"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.box-content {
  justify-content: space-between;
  margin-top: 150px;
  margin-bottom: 100px;
  .box-info {
    width: 35%;
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
  }
  .box-img {
    width: 50%;
    position: relative;
    img {
      width: 100%;
      display: block;
      border-radius: 10px;
    }
  }
}
</style>
