<script>
export default {
  data() {
    return {
      explore: [
        "Start here",
        "Blog",
        "About us",
        "Success story",
        "Courses",
        "Contact us",
      ],
      information: [
        "Membership",
        "Purchase guide",
        "Privacy Policy",
        "Terms of service",
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-content flex">
        <div class="footer-left">
          <h4>Address</h4>
          <ul class="info-address">
            <li>382 NE 191st St # 87394Miami, FL 33179-3899</li>
            <li>+1(305)547-9909 (9am - 5pm EST, Monday-Friday)</li>
            <li>support@maxcoach.com</li>
          </ul>
          <ul class="socials flex">
            <li>
              <a href="#">
                <font-awesome-icon icon="fa-brands fa-square-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon icon="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-right flex">
          <div class="list">
            <h4>Explore</h4>
            <ul>
              <li v-for="link in explore">
                <a href="#">{{ link }}</a>
              </li>
            </ul>
          </div>
          <div class="list">
            <h4>Information</h4>
            <ul>
              <li v-for="link in information">
                <a href="#">{{ link }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom flex">
      <div class="copyright">&copy; 2020 Maxcoach. All Rights Reserved</div>
      <div class="scroll-top">
        <font-awesome-icon icon="fa-solid fa-arrow-up-long" />
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
footer {
  padding: 70px 0 30px 0;
  background-color: $foot-bkg;
  .footer-left,
  .footer-right {
    width: 50%;
  }
  .footer-right .list {
    margin-right: 60px;
    li {
      margin-bottom: 15px;
      a {
        font-size: 14px;
        color: #ababa7;
      }
    }
  }
  .footer-bottom {
    align-items: center;
    margin-top: 30px;
    .copyright {
      flex-grow: 1;
      color: #ababa7;
      text-align: center;
      font-size: 14px;
    }
    .scroll-top {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: white;
      background-color: $search-head;
      text-align: center;
      line-height: 50px;
      margin-right: 30px;
      font-size: 20px;
      cursor: pointer;
    }
  }
  h4 {
    color: white;
    margin-bottom: 25px;
  }
  .info-address {
    color: #ababa7;
    font-size: 14px;
    li:not(:last-child) {
      margin-bottom: 20px;
    }
    li:last-child {
      margin-bottom: 30px;
    }
  }
  .socials {
    gap: 30px;
    a {
      font-size: 24px;
      color: #8b8b90;
    }
  }
}
</style>
