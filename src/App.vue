<template>
  <div class="c-row">
    <aside class="c-sidebar">
      <nav class="c-nav-tree">
        <router-link to="/" rel="home" itemprop="url">
          <img src="./assets/logo.svg" class="cnotv__logo" alt="cnotv" itemprop="logo">
        </router-link>
        <ul>
          <li>
            <span>Common</span>
            <ul>
              <li><router-link to="/text">Text</router-link></li>
            </ul>
          </li>
          <li>
            <span>Components</span>
            <ul>
              <li>
                <router-link to="/layout">Layout</router-link>
                <ul>
                  <li><a href="#Grid">Grid</a></li>
                </ul>
              </li>
              <li><a href="#Inputs">Inputs</a></li>
              <li><a href="#Inputs">Buttons</a></li>
            </ul>
          </li>
          <li>
            <span>Objects</span>
            <ul>
              <li><a href="#Header">Header</a></li>
              <li><a href="#Footer">Footer</a></li>
              <li>
                <a href="#Nav">Nav</a>
                <ul>
                  <li><a href="#H">Horizontal</a></li>
                  <li><a href="#V">Vertical</a></li>
                  <li><a href="#T">Tree</a></li>
                </ul>
              </li>
              <li><a href="#Modal">Modal</a></li>
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
body {
  display: flex;
  flex-flow: row wrap;
}
</style>