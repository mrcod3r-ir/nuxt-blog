<template>
  <div>
    <b-jumbotron header="product page" lead="product page by slug ">
      <p>showing slug is static</p>
      <br />
      <p>slugs is : {{ slugs }}</p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'ProductSlug',
  layout: 'training',
  data() {
    return {
      slugs: ''
    }
  },
  mounted() {
    this.slugs = this.$route.params
  }
}
</script>

<style lang="scss" scoped></style>
