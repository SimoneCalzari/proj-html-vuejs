<script>
export default {};
</script>

<template>
  <section>
    <div class="container">
      <div class="box-content flex">
        <!-- parte sinistra con la info -->
        <div class="box-info">
          <h4 class="upper">testimonials</h4>
          <h2>Why Do Peole <span>*Hearts*</span> Us?</h2>
          <p>
            Seeking for verbals of our service quality? Find them here.
            Everything is transparent and straightforward for your sense of
            justification.
          </p>
          <p>
            <a href="#">
              View All
              <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </a>
          </p>
        </div>
        <!-- /parte sinistra con le info -->
        <div class="box-person">
          <!-- titolo e paragrafo -->
          <h3>
            Professional team of specialists and passionate mentors at reach
          </h3>
          <p>
            I need to get a certification for English proficiency and MaxCoach
            is the best choice. Their tutor are smart and professional when
            dealing with students.
          </p>
          <!-- /titolo e paragrafo -->
          <!-- persona -->
          <div class="person flex">
            <div class="person-img">
              <img
                src="../assets/img/testimonial-avata-01.jpg"
                alt="foto di uno degli impiegati di maxcoach"
              />
            </div>
            <div class="person-info flex">
              <h4 class="upper">Madley pondor</h4>
              <h5>/ IT specialist</h5>
            </div>
          </div>
          <!-- /persona -->
          <!-- altra card sotto quella principale, parte alta -->
          <div class="abs-top">
            <h3>
              The MaxCoach team works really hard to ensure high level of
              quality
            </h3>
            <p>
              I am happy with their arrangement of lesson and subject. They have
              smart tutor and they are professional when dealing with students.
            </p>
          </div>
          <!-- /altra card sotto quella principale, parte alta -->
          <!-- altra card sotto quella principale, parte bassa -->
          <div class="abs-bottom">
            <div class="person flex">
              <div class="person-img">
                <img
                  src="../assets/img/testimonial-avata-02.jpg"
                  alt="foto di uno degli impiegati di maxcoach"
                />
              </div>
              <div class="person-info flex">
                <h4 class="upper">mina hollace</h4>
                <h5>/ Freelancer</h5>
              </div>
            </div>
          </div>
          <!-- /altra card sotto quella principale, parte bassa -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
section {
  padding-top: 200px;
  padding-bottom: 80px;
}
.box-content {
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
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
  }
  .box-person {
    position: relative;
    width: 58%;
    padding: 40px;
    background-color: white;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
    h3 {
      font-size: 16px;
      color: $titles;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    p {
      color: #7b7b7b;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 25px;
    }
    .person-img {
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 20px;
      img {
        width: 100%;
      }
    }
    .person-info {
      flex-direction: column;
      justify-content: center;
      h4 {
        font-size: 14px;
        margin-bottom: 15px;
      }
      h5 {
        font-size: 13px;
        color: #9c9c9c;
      }
    }
    // parte superiore della card di sfondo
    .abs-top {
      position: absolute;
      top: -95px;
      z-index: -1;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
        rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
      padding: 25px;
      width: 75%;
      left: 12.5%;
      filter: opacity(0.5);
      h3 {
        font-size: 13px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
      }
    }
    // parte inferiore della card di sfondo
    .abs-bottom {
      position: absolute;
      bottom: -75px;
      z-index: -1;
      box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
        rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
      padding: 25px;
      width: 75%;
      left: 12.5%;
      filter: opacity(0.5);
      .person-img {
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 20px;
        img {
          width: 100%;
        }
      }
      h4 {
        font-size: 12px;
        margin-bottom: 8px;
      }
      h5 {
        font-size: 11px;
      }
    }
  }
}
</style>
