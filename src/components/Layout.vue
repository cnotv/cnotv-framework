<template>
  <section class="c-section">
    <div class="c-container">
      <h1>Layout</h1>

      <section class="c-section">
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
      </section>

      <section class="c-section">
        <h2 id="Global">2. Global</h2>
        <div class="c-section">
          <div class="c-container c-bg-white">
            <h5>.c-container</h5>
            <div class="c-section">
              <h5>.c-section</h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante eros, euismod ac facilisis ac, rhoncus non metus. Curabitur vehicula pretium sem, quis feugiat massa varius ac. Nam aliquam libero eu magna fringilla posuere. Phasellus elementum varius dui quis lacinia. Aenean aliquet lorem a erat maximus condimentum. Vivamus nulla massa, scelerisque quis dolor id, sodales molestie mi. Integer ac dignissim tellus. Nam luctus sed nibh non aliquet. Quisque ornare lacinia augue id convallis. Praesent cursus nibh eu leo vehicula pellentesque. 
            </div>
            <div class="c-section">
              <h5>.c-section</h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante eros, euismod ac facilisis ac, rhoncus non metus. Curabitur vehicula pretium sem, quis feugiat massa varius ac. Nam aliquam libero eu magna fringilla posuere. Phasellus elementum varius dui quis lacinia. Aenean aliquet lorem a erat maximus condimentum. Vivamus nulla massa, scelerisque quis dolor id, sodales molestie mi. Integer ac dignissim tellus. Nam luctus sed nibh non aliquet. Quisque ornare lacinia augue id convallis. Praesent cursus nibh eu leo vehicula pellentesque. 
            </div>
          </div>
        </div>
        <div class="c-section">
          <div class="c-container-s c-bg-white">
            <h5>.c-container-s</h5>
            <div class="c-section">
              <h5>.c-section</h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ante eros, euismod ac facilisis ac, rhoncus non metus. Curabitur vehicula pretium sem, quis feugiat massa varius ac. Nam aliquam libero eu magna fringilla posuere. Phasellus elementum varius dui quis lacinia. Aenean aliquet lorem a erat maximus condimentum. Vivamus nulla massa, scelerisque quis dolor id, sodales molestie mi. Integer ac dignissim tellus. Nam luctus sed nibh non aliquet. Quisque ornare lacinia augue id convallis. Praesent cursus nibh eu leo vehicula pellentesque. 
            </div>
          </div>
        </div>
      </section>
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