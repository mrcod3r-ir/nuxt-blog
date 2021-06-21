<template>
  <div>
    <h1>form</h1>
    <br />
    <h2>form validation</h2>
    <label>number : </label>
    <text-input v-model="number"></text-input>
    <br />
    <label> firstName: </label>
    <text-input v-model="firstName"></text-input>
    <br />
    <number-picker
      v-model="count"
      :min-value="4"
      class="d-flex"
    ></number-picker>
  </div>
</template>

<script>
import NumberPicker from '~/components/ui/NumberPicker.vue'
import TextInput from '~/components/ui/TextInput.vue'
export default {
  name: 'Form',
  components: { TextInput, NumberPicker },
  layout: 'training',
  data() {
    return {
      firstName: '',
      count: 5,
      number: ''
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
