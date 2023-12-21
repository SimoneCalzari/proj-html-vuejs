<script>
export default {};
</script>

<template>
  <div class="header-right flex">
    <div class="icon flex">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <div class="notify">0</div>
    </div>
    <div class="icon flex">
      <font-awesome-icon icon="fa-regular fa-circle-user" />
    </div>
    <div class="search-bar flex">
      <label for="search" class="visuallyhidden">Search in our website</label>
      <input type="text" placeholder="Search..." id="search" />
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.header-right {
  gap: 5px;
  align-items: center;
  .icon {
    position: relative;
    height: 35px;
    width: 35px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    .notify {
      font-size: 10px;
      color: white;
      text-align: center;
      vertical-align: middle;
      background-color: $search-head;
      height: 15px;
      width: 15px;
      line-height: 15px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .search-bar {
    background-color: $input-bkg;
    align-items: center;
    padding: 15px 20px;
    border-radius: 7px;
    margin-left: 5px;
    & > *:nth-child(2) {
      color: $search-head;
    }
    #search {
      background-color: transparent;
      outline: none;
      border: none;
    }
  }
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
</style>
