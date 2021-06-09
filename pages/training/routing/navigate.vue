<template>
  <div>
    <h2>this is Navigate page</h2>
  </div>
</template>

<script>
export default {
  name: 'Navigate',
  layout: 'training',
  data() {
    return {
      routeObject: {}
    }
  },
  mounted() {
    this.routeObject = this.$route
    console.log(this.routeObject)
  }
}
</script>

<style lang="scss" scoped></style>
