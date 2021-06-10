<template>
  <div>
    <h2 class="mb-5">This Is Navigate Page</h2>
    <b-button variant="outline-primary" @click="appendQuery()"
      >Append Query</b-button
    >
    <br class="my-5" />
    <code>{{ $route.query }}</code>
    <pre class="mt-5"></pre>
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
  },
  methods: {
    appendQuery() {
      this.$router.push({
        query: { ...this.$route.query, apq: 'apendedQuery' }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
