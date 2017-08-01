<template>
  <section class="c-section">
    <div class="c-container">
      <h1>Layout</h1>
      <h2 id="Grid">1. Grid</h2>
      <div class="c-row c-row--padding-2">
        <div class="c-col">.c-col</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-2">.c-col-1-2</div>
        <div class="c-col-1-2">.c-col-1-2</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-3">.c-col-1-3</div>
        <div class="c-col-1-3">.c-col-1-3</div>
        <div class="c-col-1-3">.c-col-1-3</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-4">.c-col-1-4</div>
        <div class="c-col-1-4">.c-col-1-4</div>
        <div class="c-col-1-4">.c-col-1-4</div>
        <div class="c-col-1-4">.c-col-1-4</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-5">.c-col-1-5</div>
        <div class="c-col-1-5">.c-col-1-5</div>
        <div class="c-col-1-5">.c-col-1-5</div>
        <div class="c-col-1-5">.c-col-1-5</div>
        <div class="c-col-1-5">.c-col-1-5</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-6">.c-col-1-6</div>
        <div class="c-col-1-6">.c-col-1-6</div>
        <div class="c-col-1-6">.c-col-1-6</div>
        <div class="c-col-1-6">.c-col-1-6</div>
        <div class="c-col-1-6">.c-col-1-6</div>
        <div class="c-col-1-6">.c-col-1-6</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-3">.c-col-1-3</div>
        <div class="c-col-2-3">.c-col-2-3</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-4">.c-col-1-4</div>
        <div class="c-col-3-4">.c-col-3-4</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-2-5">.c-col-2-5</div>
        <div class="c-col-3-5">.c-col-3-5</div>
      </div>
      <div class="c-row c-row--padding-2">
        <div class="c-col-1-6">.c-col-1-6</div>
        <div class="c-col-5-6">.c-col-5-6</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
  [class^="c-col"] {
    text-align: center;
    background-color: lightgrey;
    background-clip: content-box;
  }
</style>