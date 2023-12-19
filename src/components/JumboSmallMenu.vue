<script>
export default {};
</script>

<template>
  <ul class="flex">
    <li><font-awesome-icon icon="fa-solid fa-ruler" /></li>
    <li><font-awesome-icon icon="fa-solid fa-life-ring" /></li>
    <li><font-awesome-icon icon="fa-solid fa-book" /></li>
    <li><font-awesome-icon icon="fa-solid fa-cart-shopping" /></li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-top: 5vw;
  li {
    padding: 10px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
