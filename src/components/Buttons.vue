<template>
  <section class="c-section">
    <div class="c-container">
      <h1>Buttons</h1>

      <section class="c-section">
        <h2>1. Buttons default</h2>
        <div>
          <a href="#" class="c-btn-cta">Link Button</a>
          <button class="c-btn-cta">Button Element</button>
          <input type="button" class="c-btn-cta" value="input[type='button']"/>
          <button class="c-btn-cta" disabled>Button Element</button>
        </div>

        <div>
          <a href="#" class="c-btn-alt">Link Button</a>
          <button class="c-btn-alt">Button Element</button>
          <input type="button" class="c-btn-alt" value="input[type='button']"/>
          <button class="c-btn-alt" disabled>Button Element</button>
        </div>
      </section>

      <section class="c-section">
        <h2>2. Buttons status</h2>
        <div>
          <a href="#" class="c-btn-cta is-active">Link Button</a>
          <button class="c-btn-cta is-active">Button Element</button>
          <input type="button" class="c-btn-cta is-active" value="input[type='button']"/>
          <button class="c-btn-cta is-active" disabled>Button Element</button>
        </div>

        <div>
          <a href="#" class="c-btn-alt is-active">Link Button</a>
          <button class="c-btn-alt is-active">Button Element</button>
          <input type="button" class="c-btn-alt is-active" value="input[type='button']"/>
          <button class="c-btn-alt is-active" disabled>Button Element</button>
        </div>
      </section>

      <section class="c-section">
        <h2>3. Buttons icons</h2>
        <div>
          <a href="#" class="c-btn-cta">Link Button<i class="fa fa-pencil"></i></a>
          <button class="c-btn-cta">Button Element<i class="fa fa-pencil"></i></button>
          <input type="button" class="c-btn-cta" value="input[type='button']"/>
          <button class="c-btn-cta" disabled>Button Element<i class="fa fa-pencil"></i></button>
        </div>

        <div>
          <a href="#" class="c-btn-alt">Link Button<i class="fa fa-pencil"></i></a>
          <button class="c-btn-alt">Button Element<i class="fa fa-pencil"></i></button>
          <input type="button" class="c-btn-alt" value="input[type='button']"/>
          <button class="c-btn-alt" disabled>Button Element<i class="fa fa-pencil"></i></button>
        </div>
      </section>

    </div>
  </section>
</template>

<script>
export default {
  name: 'buttons',
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>