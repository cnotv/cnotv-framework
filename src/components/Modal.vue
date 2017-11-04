<template>
  <div>
    <section class="c-section">
      <div class="c-container">
        <h1>Modal</h1>
        <a href="#" class="c-btn-cta" @click="toggleModal">Open modal</a>
      </div>
    </section>
    <aside class="o-modal"  v-bind:class="{ 'is-open': isOpen}" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div class="o-modal__wrap fadeInRight" role="document">
        <div class="o-modal__content">
          <p>
            Lorem ipsum dolor sit amet, <b>consectetur adipiscing elit</b>. Praesent et nisi <u>vitae nulla fringilla lacinia</u>. Morbi quis finibus mi. Curabitur non diam sit amet ante tempus tempor. In hac habitasse platea dictumst. <i>Duis dignissim, sapien vel tincidunt volutpat, arcu lectus hendrerit ante, at consequat eros lorem sit amet mauris. Morbi non imperdiet ligula.</i> Sed faucibus quis nisi sit amet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. <a href="">Here is a link</a>
          </p>
          <a href="#" class="c-btn-cta" @click="toggleModal">Close modal</a>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>

</style>