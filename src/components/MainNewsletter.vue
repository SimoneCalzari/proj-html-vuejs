<script>
export default {};
</script>

<template>
  <section>
    <div class="container">
      <h2>
        Subscribe
        <span>Newsletters</span>
      </h2>
      <p>
        Enter your email address to register our newsletter subscription
        delivered on a regular basis!
      </p>
      <div class="input-box flex">
        <label for="email" class="visuallyhidden">Enter your email</label>
        <input type="email" placeholder="Enter your email" id="email" />
        <button>Subscribe</button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
section {
  padding: 70px 0 100px;
}
h2 {
  color: $titles;
  font-size: 34px;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  span {
    color: $search-head;
    font-weight: lighter;
  }
  // campitura quadrata inclinata
  &::before {
    content: "";
    display: block;
    width: 205px;
    height: 193px;
    position: absolute;
    background-image: url("../assets/img/maxcoach-shape-09.png");
    right: -7vw;
    top: -30px;
  }
}
p {
  color: #696969;
  text-align: center;
  font-size: 15px;
  width: 50%;
  margin: 0 auto;
  line-height: 1.6;
  margin-bottom: 40px;
  position: relative;
  // cerchio decorativo a sinistra
  &::after {
    content: "";
    width: 38px;
    height: 38px;
    border: 6px solid #8fd6ca;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: -23vw;
    bottom: -30px;
  }
  // simbolo maxcoach a destra
  &::before {
    content: "";
    display: block;
    width: 127px;
    height: 123px;
    position: absolute;
    background-image: url("../assets/img/maxcoach-shape-02.png");
    top: 20px;
    right: -22vw;
  }
}
.input-box {
  width: 55%;
  margin: 0 auto;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
  input {
    border: none;
    outline: none;
    background-color: $input-bkg;
    padding: 15px 20px;
    flex-grow: 1;
  }
  button {
    padding: 15px 30px;
    color: white;
    background-color: $search-head;
    cursor: pointer;
    font-weight: bold;
  }
  // laber disponibile per l'accessibilità ma non visibile dall'utente
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
}
</style>
