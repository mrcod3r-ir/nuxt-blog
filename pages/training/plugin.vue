<template>
  <div>
    <h1>plugin</h1>
    <br />
    <p>watch console log</p>
  </div>
</template>

<script>
export default {
  name: 'Plugin',
  layout: 'training',
  asyncData({ $myPlugin2 }) {
    console.log('asyncData')
    $myPlugin2.test()
  },
  fetch() {
    console.log('fetch')
    this.$myPlugin2.test()
  }
}
</script>

<style lang="scss" scoped></style>
