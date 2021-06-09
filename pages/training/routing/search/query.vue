<template>
  <div>
    <b-jumbotron header="search page by query" lead="search page by query">
      <p>showing queries by this.$route.query</p>
      <br />
      <p>query is :</p>
      {{ getQueries }}
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'QueryPage',
  layout: 'training',
  computed: {
    getQueries() {
      return this.$route.query
    }
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>

<style lang="scss" scoped></style>
