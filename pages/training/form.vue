<template>
  <div>
    <h1>form</h1>
    <br />
    <h2>form validation by vee-validate</h2>
    <validation-observer v-slot="{ handleSubmit, reset }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <validation-provider
          v-slot="{ errors }"
          rules="even|required"
          name="number"
        >
          <label>number : </label>
          <text-input
            v-model="numberValue"
            :type="'number'"
            name="number"
          ></text-input>
          <span>{{ errors[0] }}</span>
        </validation-provider>
        <br />
        <validation-provider v-slot="{ errors }" rules="required" name="name">
          <label> firstName: </label>
          <text-input v-model="firstName" name="firstName"></text-input>
          <span v-show="errors && errors.length > 0">{{ errors[0] }}</span>
        </validation-provider>
        <br />
        <number-picker
          v-model="count"
          :min-value="4"
          class="d-flex"
        ></number-picker>
        <br />
        <button type="submit" class="btn btn-outline-primary">
          submit form
        </button>
        <button type="reset" class="btn btn-outline-secondary" @click="reset">
          reset form error
        </button>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import NumberPicker from '~/components/ui/NumberPicker.vue'
import TextInput from '~/components/ui/TextInput.vue'
extend('even', (value) => {
  return value % 2 === 0
})
export default {
  name: 'Form',
  components: {
    TextInput,
    NumberPicker,
    ValidationProvider,
    ValidationObserver
  },
  layout: 'training',
  data() {
    return {
      firstName: '',
      count: 5,
      numberValue: ''
    }
  },
  watch: {
    firstName(value) {
      console.log('firstName is : ' + value)
    }
  },
  methods: {
    onSubmit() {
      alert('form submited !')
    }
  }
}
</script>

<style lang="scss" scoped></style>
