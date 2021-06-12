<template>
  <div>
    <h2>AsyncData2</h2>
    <b-jumbotron
      header="AsyncData2"
      lead=" 📌 AsyncData is nuxt lifecycle method called every time page before loading page"
    >
      <p>click and see network tab in devtools</p>

      <b-button variant="primary" :to="{ name: 'training-asyncdata' }">
        go to async page</b-button
      >
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'AsyncData2',
  layout: 'training',
  async asyncData({ $axios }) {
    const response = await $axios.$get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    return { title: response.title }
  },
  data() {
    return {
      name: 'ali'
    }
  }
}
</script>

<style lang="scss" scoped></style>
