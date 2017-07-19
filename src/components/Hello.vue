<template>
  <div class="cnotv__section">
    <h1>{{ msg }}</h1>
    <h3>{{ msg2 }}</h3>
    <p>{{ msg3 }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Styleguide and framework for cnotv',
      msg2: 'Built with Vue, SCSS and KSS',
      msg3: '(Soon online with built automation using Travis)',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cnotv__section {
  text-align: center;
}
</style>
