<template>
  <section class="c-section">
    <div class="c-container">
      <article>
        <h1>Text</h1>

        <h1>h1 heading tag</h1>
        <h2>h2 heading tag</h2>
        <h3>h3 heading tag</h3>
        <h4>h4 heading tag</h4>
        <h5>h5 heading tag</h5>
        <h6>h6 heading tag</h6>

        <small>small text size</small>
        <br>
        <p>
          Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>. Praesent et nisi <u>vitae nulla fringilla lacinia</u>. Morbi quis finibus mi. Curabitur non diam sit amet ante tempus tempor. In hac habitasse platea dictumst. <i>Duis dignissim, sapien vel tincidunt volutpat, arcu lectus hendrerit ante, at consequat eros lorem sit amet mauris. Morbi non imperdiet ligula.</i> Sed faucibus quis nisi sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. <a href="">Here is a link</a> nisl sed erat vulputate tristique. <mark>mark html tag</mark>. Sed non sapien fringilla, semper eros quis, <code>Code test</code> porttitor lacus. 

          Nunc elementum porta lacinia. Nullam feugiat, nisi vitae fermentum aliquam, sem mauris vulputate nisl, sed consectetur nisl diam vitae dolor. Donec sollicitudin ultricies purus. Donec porttitor non nunc id euismod.
        </p>
        <small>Sed faucibus quis nisi sit amet faucibus.</small>

        <ul>
          <li>List element</li>
          <li>List element</li>
          <li>List element</li>
          <li>List element <a href="">link</a></li>
        </ul>

        <ol>
          <li>Ordered list element</li>
          <li>Ordered list element</li>
          <li>Ordered list element</li>
          <li>Ordered list element <a href="">link</a></li>
        </ol>

        <pre>
          <code>
// A code example

"object":{
  "name": "value",
  "name": array[1,2,3,4,5]
}

.asd {
  color: none;
  background: red;
}
          </code>
        </pre>

        <address>Address html tag</address>

        <blockquote>
          <p>Blockquote html tag: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nisi vitae nulla fringilla lacinia.</p>
        </blockquote>

        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nisi vitae nulla fringilla lacinia.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nisi vitae nulla fringilla lacinia.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nisi vitae nulla fringilla lacinia.</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
              <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
            </tr>
          </tfoot>
        </table>
        
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'global',
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>