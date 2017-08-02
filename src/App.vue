<template>
  <div class="c-row--edge">
    <aside class="c-sidebar">
      <nav class="c-nav-v" tabindex="-1">
        <img src="./assets/logo.svg" class="c-logo c-nav-v__toggle" alt="cnotv" itemprop="logo">
        <button class="c-nav-v__close"><i class="fa fa-close"></i></button>
        <router-link to="/">Introduction</router-link>
        <ul>
          <li>
            <span>Common</span>
            <ul>
              <li><router-link to="/text">Text</router-link></li>
              <li><router-link to="/mixin">Mixin</router-link></li>
              <li><router-link to="/colors">Colors</router-link></li>
              <li><router-link to="/icons">Icons</router-link></li>
            </ul>
          </li>
          <li>
            <span>Components</span>
            <ul>
              <li>
                <router-link to="/layout">Layout</router-link>
                <ul>
                  <li><a href="/layout#Grid">Grid</a></li>
                  <li><a href="/layout#Section">Section</a></li>
                  <li><a href="/layout#Container">Container</a></li>
                </ul>
              </li>
              <li><a href="/inputs">Inputs</a></li>
              <li>
                <a href="/buttons">Buttons</a>
                <ul>
                  <li><a href="/buttons#icons">Icons</a></li>
                </ul>
              </li>
              <li><a href="/backgrounds">Backgrounds</a></li>
              <li><a href="/loader">Loader</a></li>
              <li><a href="/animations">Animations</a></li>
            </ul>
          </li>
          <li>
            <span>Objects</span>
            <ul>
              <li>
                <a href="/nav">Nav</a>
                <ul>
                  <li><a href="/nav#H">Horizontal</a></li>
                  <li><a href="/nav#V">Vertical</a></li>
                </ul>
              </li>
              <li>
                <a href="/cards">Cards</a>
                <ul>
                  <li><a href="/cards#portfolio">Portfolio</a></li>
                  <li><a href="/cards#article">Article</a></li>
                </ul>
              </li>
              <li><a href="/searchbar">Search bar</a></li>
              <li><a href="/modal">Modal</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
    <main id="app" class="c-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" src="./assets/scss/main.scss"></style>

<style scoped>
</style>