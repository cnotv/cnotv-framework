<template>
  <section class="c-section">
    <div class="c-container">
      <h1>Cards</h1>

      <section class="c-section">
        <h2 id="#default">1. Horizontal</h2>

        <nav class="o-nav-h" tabindex="-1">
          <ul>
            <li><a href="#">Link</a></li>
            <li>
              <span>Group</span>
              <ul>
                <li>
                  <a href="#">Link with dropdown</a>
                  <ul>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                  </ul>
                </li>
                <li><a href="#">Link</a></li>
              </ul>
            </li>
            <li>
              <span>Group</span>
              <ul>
                <li>
                  <a href="#">Link with dropdown</a>
                  <ul>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                  </ul>
                </li>
                <li><a href="#">Link</a></li>
              </ul>
            </li>
          </ul>

          <div class="o-nav-h__right">
            <a href="#"><i class="fa fa-search"></i></a>
            <a href="#"><i class="fa fa-pencil"></i></a>
          </div>
        </nav>
      </section>

      <section class="c-section">
        <h2 id="#portfolio">2. Vertical</h2>

        <nav class="o-nav-v" tabindex="-1">
          <ul>
            <li><a href="#">Link</a></li>
            <li>
              <span>Group</span>
              <ul>
                <li>
                  <a href="#">Link with dropdown</a>
                  <ul>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                  </ul>
                </li>
                <li><a href="#">Link</a></li>
              </ul>
            </li>
            <li>
              <span>Group</span>
              <ul>
                <li>
                  <a href="#">Link with dropdown</a>
                  <ul>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                    <li><a href="#">Sub link</a></li>
                  </ul>
                </li>
                <li><a href="#">Link</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>