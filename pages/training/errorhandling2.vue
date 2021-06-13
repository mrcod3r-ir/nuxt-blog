<template>
  <div>
    <h2>Error Handling 2</h2>
    <b-card
      bg-variant="light"
      header="error handling 2"
      class="text-center my-5"
    >
      <b-card-text
        >when need hanlde error for showing in element not whole
        page!</b-card-text
      >
    </b-card>
    <br />
    <b-card
      bg-variant="info"
      text-variant="white"
      header="Error Info"
      class="text-center my-5"
    >
      <b-card-text>
        <p v-if="$fetchState.pending">Loading...</p>
        <p v-else-if="$fetchState.error">{{ $fetchState.error.message }}</p>
        <p v-else>{{ title }}</p>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ErrorHandling2',
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
        // console.log('e.response', e.response)
        const statusCode = e?.response?.status || 500
        const message = e?.response?.statusText || 'oops error'

        // set status code as nuxt status code for error handling
        // if (process.server) {
        //   this.$nuxt.context.res.statusCode = statusCode
        // }
        //  whole page throw error and can show error page
        // this.$nuxt.error({ statusCode, message })

        //  for showing error in part of page or handle it
        throw new Error(`message : ${message} , statusCode : ${statusCode} `)
      })
  }
}
</script>

<style lang="scss" scoped></style>
