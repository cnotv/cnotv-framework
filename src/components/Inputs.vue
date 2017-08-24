<template>
  <section class="c-section">
    <div class="c-container">
      <h1>Inputs</h1>

      <section class="c-section">
          <h2 id="style">1. Inputs style</h2>

          <div class="c-row c-row--padding-2">
            <div class="c-col-5-6">
              <input class="c-input__text c-col" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }" type="text" id="text_input" placeholder="Text input" />
              <div class="c-feedback--error">Please insert a value</div>

              <input class="c-input__email c-col" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }" type="email" id="email_input" placeholder="your@email.com" />
              <div class="c-feedback--error">Please insert a real email</div>

              <input class="c-input__password c-col" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }" type="password" id="password" placeholder="Please insert a password" />
              <div class="c-feedback--error">Please insert a password</div>

              <input class="c-input__number c-col" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }" type="number" id="" placeholder="123-.+" />
              <div class="c-feedback--error">Please insert a value</div>

              <textarea class="c-input__textarea c-col" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }" type="textarea" id="" rows="3" ></textarea>
              <div class="c-feedback--error">Please insert a value</div>

              <input class="c-input__date c-col" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }" type="date" id="" placeholder="dd.mm.yyyy" >
              <div class="c-feedback--error">Please insert a value</div>

              <select class="c-input__select c-col" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }" name="" id="title" >
                <option value="" selected hidden>Select default</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
              </select>

              <!-- <div class="c-input__select c-col" name="" id="title" >
                <div value="" selected hidden>Select custom</div>
                <div value="">Option 1</div>
                <div value="">Option 1</div>
              </div>
              <div class="c-feedback--error">Please select an option</div> -->

              <div class="c-radio" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }">
                <input type="radio" id="radio-1-1" name="radio-1" />
                <label for="radio-1-1">Radio 1</label>
              </div>
              <div class="c-radio" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }">
                <input type="radio" id="radio-1-2" name="radio-1" />
                <label for="radio-1-2">Radio 2</label>
              </div>
              <div class="c-feedback--error">Please select an option</div>

              <div class="c-radio__inlined">
                <div class="c-radio" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }">
                  <input type="radio" id="radio-inlined-1" name="radio-inlined-" />
                  <label for="radio-inlined-1">Radio inlined 1</label>
                </div>
                <div class="c-radio" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }">
                  <input type="radio" id="radio-inlined-2" name="radio-inlined-" />
                  <label for="radio-inlined-2">Radio inlined 2</label>
                </div>
                <div class="c-feedback--error">Please select an option</div>
              </div>

              <div class="c-checkbox" v-bind:class="{ 'is-invalid': isInvalid, 'is-disabled' : isDisabled }">
                <input class="" type="checkbox" id="checkbox-1" />
                <label for="checkbox-1">Checkbox</label>
              </div>
              <div class="c-feedback--error">You must check it</div>
            </div>

            <div class="c-col-1-6">
              <button id="toggleStatus" class="c-btn-cta" v-bind:class="{ 'is-active': isInvalidActive }" @click="toggleInvalid">Toggle error</button>
              <br>
              <br>
              <button id="toggleStatus" class="c-btn-cta" v-bind:class="{ 'is-active': isDisabledActive }" @click="toggleDisabled">Toggle disabled</button>
            </div>
          </div>
        </form>

      </section>

      <section class="c-section">
          <h2 id="validation">2. Inputs validation</h2>

          <form v-on:submit.prevent="onSubmit">

          <div class="c-row c-row--padding-2">
            <div class="c-col-5-6" >
              <input class="c-input__text c-col" type="text" id="text_input" placeholder="Text input" />

              <input class="c-input__email c-col" type="email" id="email_input" placeholder="your@email.com" />

              <input class="c-input__password c-col" type="password" id="password" placeholder="Please insert a password" />

              <input class="c-input__password c-col" type="password" id="password_confirmation" placeholder="Confirm password" />

              <input class="c-input__date c-col" type="date" id="" placeholder="dd.mm.yyyy" >

              <select class="c-input__select c-col" name="" id="title" >
                <option value="" selected hidden>Select default</option>
                <option value="">Option 1</option>
                <option value="">Option 1</option>
              </select>

              <div class="c-radio">
                <input type="radio" id="radio-2-1" name="radio-2" />
                <label for="radio-2-1">Radio 1</label>
              </div>
              <div class="c-radio">
                <input type="radio" id="radio-2-2" name="radio-2" />
                <label for="radio-2-2">Radio 2</label>
              </div>

              <div class="c-checkbox">
                <input class="" type="checkbox" id="checkbox-2" />
                <label for="checkbox-2">Checkbox</label>
              </div>
            </div>

            <div class="c-col-1-6">
              <button class="c-btn-cta" type="submit">Submit form</button>
            </div>
          </div>
        </form>

      </section>

    </div>
  </section>
</template>

<script>
export default {
  name: 'inputs',
  data() {
    return {
      isInvalid: false,
      isDisabled: false,
      isInvalidActive: false,
      isDisabledActive: false,
    };
  },
  methods: {
    onSubmit: function checkValidation() {
    },
    toggleInvalid() {
      this.isInvalid = !this.isInvalid;
      this.isInvalidActive = !this.isInvalidActive;
    },
    toggleDisabled() {
      this.isDisabled = !this.isDisabled;
      this.isDisabledActive = !this.isDisabledActive;
    },
  },
};

</script>

<style scoped>

</style>