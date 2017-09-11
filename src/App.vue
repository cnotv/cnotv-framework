<template>
  <div class="c-row--edge">
    <aside class="c-sidebar">
      <nav class="o-nav-v" tabindex="-1">
        <img src="./assets/logo.svg" class="c-logo o-nav-v__toggle" alt="cnotv" itemprop="logo">
        <button class="o-nav-v__close"><i class="fa fa-close"></i></button>
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
                  <li><a href="/layout#Global">Global</a></li>
                </ul>
              </li>
              <li>
                <router-link to="/inputs">Inputs</router-link>
                <ul>
                  <li><a href="/inputs#style">Style</a></li>
                  <li><a href="/inputs#validation">Validation</a></li>
                </ul>
              </li>
              <li>
                <router-link to="/buttons">Buttons</router-link>
                <ul>
                  <li><a href="/buttons#icons">Icons</a></li>
                </ul>
              </li>
              <li><router-link to="/backgrounds">Backgrounds</router-link></li>
              <li><router-link to="/loader">Loader</router-link></li>
              <li><router-link to="/animations">Animations</router-link></li>
            </ul>
          </li>
          <li>
            <span>Objects</span>
            <ul>
              <li>
                <router-link to="/nav">Nav</router-link>
                <ul>
                  <li><a href="/nav#H">Horizontal</a></li>
                  <li><a href="/nav#V">Vertical</a></li>
                </ul>
              </li>
              <li>
                <router-link to="/cards">Cards</router-link>
                <ul>
                  <li><a href="/cards#default">Default</a></li>
                  <li><a href="/cards#portfolio">Portfolio</a></li>
                  <li><a href="/cards#article">Article</a></li>
                </ul>
              </li>
              <li><router-link to="/searchbar">Search bar</router-link></li>
              <li><router-link to="/modal">Modal</router-link></li>
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