<template>
  <div>
    <h1>form</h1>
    <br />
    <label for="firstName">firstname : </label>
    <input id="firstName" v-model="firstName" type="text" />
    <br />
    <h3>textinput component</h3>
    <text-input v-model="firstnameComponent" />
  </div>
</template>

<script>
import TextInput from '~/components/ui/TextInput.vue'
export default {
  name: 'Form',
  components: { TextInput },
  layout: 'training',
  data() {
    return {
      firstName: '',
      firstnameComponent: ''
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
