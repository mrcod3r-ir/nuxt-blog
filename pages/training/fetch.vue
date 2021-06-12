<template>
  <div>
    <h2>Fetch</h2>
    <div v-if="$fetchState.pending">⌛</div>
    <b-jumbotron
      v-else
      header="Fetch"
      lead=" 📌 fetch is new featured nuxt lifecycle method called after created and before component mounted lifecycle"
    >
      <p>
        📌 old fetch call like asyncdata means runs before created lifecycle
      </p>
      <p>
        📌 if use <code> fetch({context}){} </code> means old fetch lifecycle
        and if use without context means new featured fetch lifecycle method
      </p>
      <br />
      <hr />

      <code>
        <pre>title : {{ title }}</pre>
      </code>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Fetch',
  layout: 'training',
  data() {
    return {
      title: ''
    }
  },
  fetch() {
    return this.$axios
      .$get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        this.title = response.title
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>

<style lang="scss" scoped></style>
