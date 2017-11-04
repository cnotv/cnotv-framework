<template>
  <section class="c-section">
    <div class="c-container">
      <h1>Cards</h1>

      <section class="c-section">
        <h2 id="#default">1. Card default</h2>
        <div class="c-row">

          <article class="c-col-1-3 c-card">
            <div class="c-card__wrap">
              <section>
                <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
              </section>
              <footer>
                <p>Some footer content</p>
              </footer>
            </div>
          </article>

          <article class="c-col-1-3 c-card">
            <div class="c-card__wrap">
              <section>
                <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
                <a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
              </section>
            </div>
          </article>

          <article class="c-col-1-3 c-card">
            <div class="c-card__wrap">
              <section>
                <p>Card with a button</p>
              </section>
              <footer>
                <div class="c-btn-cta">Go next</div>
              </footer>
            </div>
          </article>

        </div>
      </section>

      <section class="c-section">
        <h2 id="#portfolio">2. Card portfolio</h2>
      </section>

      <section class="c-section">
        <h2 id="#article">3. Card article</h2>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  name: 'cards',
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>