<script>
export default {};
</script>

<template>
  <section>
    <div class="container">
      <h2>Subscribe <span>Newsletters</span></h2>
      <p>
        Enter your email address to register our newsletter subscription
        delivered on a regular basis!
      </p>
      <div class="input-box flex">
        <input type="email" placeholder="Enter your email" />
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
  span {
    color: $search-head;
    font-weight: lighter;
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
}
.input-box {
  width: 55%;
  margin: 0 auto;
  border-radius: 7px;
  overflow: hidden;
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
}
</style>
