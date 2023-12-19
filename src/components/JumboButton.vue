<script>
export default {};
</script>

<template>
  <button>
    <a href="#">
      Download free guidebook
      <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
    </a>
  </button>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
button {
  background-color: transparent;
  a {
    display: block;
    padding: 15px 40px;
    color: $search-head;
    background-color: white;
    font-weight: bold;
    font-size: 14px;
    border-radius: 5px;
    &:hover {
      background-color: $search-head;
      color: white;
    }
  }
}
</style>
