<template>
  <div>
    <h1>form</h1>
    <br />
    <h2>form validation by vee-validate</h2>

    <validation-provider v-slot="{ errors }" rules="even" name="number">
      <label>number : </label>
      <text-input
        v-model="numberValue"
        :type="'number'"
        name="number"
      ></text-input>
      <span>{{ errors[0] }}</span>
    </validation-provider>
    <br />
    <label> firstName: </label>
    <text-input v-model="firstName" name="firstName"></text-input>
    <br />
    <number-picker
      v-model="count"
      :min-value="4"
      class="d-flex"
    ></number-picker>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
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
    ValidationProvider
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
  }
}
</script>

<style lang="scss" scoped></style>
