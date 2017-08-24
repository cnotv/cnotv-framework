<template>
  <section class="c-section">
    <div class="c-container">
      <h2>Inputs</h2>

      <input class="c-input__text c-col " type="text" id="text_input" placeholder="Text input" />
      <div class="c-feedback--error">Please insert a value</div>

      <input class="c-input__email c-col " type="email" id="email_input" placeholder="your@email.com" />
      <div class="c-feedback--error">Please insert a real email</div>

      <input class="c-input__password c-col " type="password" id="password" placeholder="Please insert a password" />
      <div class="c-feedback--error">Please insert a password</div>

      <input class="c-input__number c-col " type="number" id="" placeholder="123-.+" />
      <div class="c-feedback--error">Please insert a value</div>

      <textarea class="c-input__textarea c-col " type="textarea" id="" rows="3" ></textarea>
      <div class="c-feedback--error">Please insert a value</div>

      <input class="c-input__date c-col " type="date" id="" placeholder="dd.mm.yyyy" >
      <div class="c-feedback--error">Please insert a value</div>

      <select class="c-input__select c-col " name="" id="title" >
        <option value="" selected hidden>Select option</option>
        <option value="">Option 1</option>
        <option value="">Option 1</option>
      </select>
      <div class="c-feedback--error">Please select an option</div>

      <div class="c-radio ">
        <input type="radio" id="radio-1" name="radio-" />
        <label for="radio-1">Radio 1</label>
      </div>
      <div class="c-radio ">
        <input type="radio" id="radio-2" name="radio-" />
        <label for="radio-2">Radio 2</label>
      </div>
      <div class="c-feedback--error">Please select an option</div>

      <div class="c-radio__inlined">
        <div class="c-radio ">
          <input type="radio" id="radio-inlined-1" name="radio-inlined-" />
          <label for="radio-inlined-1">Radio inlined 1</label>
        </div>
        <div class="c-radio ">
          <input type="radio" id="radio-inlined-2" name="radio-inlined-" />
          <label for="radio-inlined-2">Radio inlined 2</label>
        </div>
        <div class="c-feedback--error">Please select an option</div>
      </div>

      <div class="c-checkbox ">
        <input class="" type="checkbox" id="checkbox-" />
        <label for="checkbox-">Checkbox</label>
      </div>
      <div class="c-feedback--error">You must check it</div>


    </div>
  </section>
</template>

<script>
export default {
  name: 'inputs',
  data() {
    return {
    };
  },
};
</script>

<style scoped>

</style>