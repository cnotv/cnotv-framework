<template>
  <main id="app" class="cnotv__main cnotv__container">
    <a href="https://cnotv.xyz/" class="cnotv__logo-link" rel="home" itemprop="url">
      <img src="./assets/logo.svg" class="cnotv__logo" alt="cnotv" itemprop="logo">
    </a>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>
