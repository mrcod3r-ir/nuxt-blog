<template>
  <div>
    <h2>Error Handling</h2>
    <b-card bg-variant="light" header="error handling" class="text-center mt-5">
      <b-card-text>whole page throw error</b-card-text>
      <b-card-text>press F12 check console tab</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ErrorHandling',
  layout: 'training',
  data() {
    return {
      title: ''
    }
  },
  fetch() {
    return this.$axios
      .$get('https://jsonplaceholder.typicode.com/todos/0')
      .then((response) => {
        this.title = response.title
      })
      .catch((e) => {
        console.log('e.response', e.response)
        const statusCode = e?.response?.status || 500
        const message = e?.response?.statusText || 'oops error'

        // set status code as nuxt status code for error handling
        if (process.server) {
          this.$nuxt.context.res.statusCode = statusCode
        }
        //  whole page throw error and can show error page
        this.$nuxt.error({ statusCode, message })
      })
  }
}
</script>

<style lang="scss" scoped></style>
