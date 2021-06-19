<template>
  <div>
    <h1>form</h1>
    <br />
    <label for="firstName">firstname : </label>
    <input id="firstName" v-model="firstName" type="text" />
    <br />
    <h3>textinput component</h3>
    <!-- <TextInput v-model="firstnameComponent" /> -->
  </div>
</template>

<script>
export default {
  name: 'Form',
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
    }
  }
}
</script>

<style lang="scss" scoped></style>
