<script>
export default {};
</script>

<template>
  <button>
    <a href="#"> Get Free Guide </a>
  </button>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
button {
  background-color: transparent;
  a {
    display: block;
    padding: 15px 50px;
    color: white;
    background-color: $search-head;
    font-weight: bold;
    font-size: 13px;
    border-radius: 5px;
  }
}
</style>
