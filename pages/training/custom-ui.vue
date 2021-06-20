<template>
  <div>
    <h1>custom ui</h1>
    <br />
    <label for="firstName">firstname : </label>
    <input id="firstName" v-model="firstName" type="text" />
    <br />
    <h3>textinput component</h3>
    <text-input v-model="firstnameComponent" />
    <br />
    <h3>number picker</h3>
    <number-picker v-model="count" :min-value="1" />
  </div>
</template>

<script>
import NumberPicker from '~/components/ui/NumberPicker.vue'
import TextInput from '~/components/ui/TextInput.vue'
export default {
  name: 'CustomUi',
  components: { TextInput, NumberPicker },
  layout: 'training',
  data() {
    return {
      firstName: '',
      firstnameComponent: '',
      count: 1
    }
  },
  watch: {
    firstName(value) {
      console.log(`firstname is ${value}`)
    },
    firstnameComponent(value) {
      console.log(`firstnameComponent is ${value}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
