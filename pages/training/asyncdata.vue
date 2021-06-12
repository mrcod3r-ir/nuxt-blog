<template>
  <div>
    <h2>AsyncData</h2>
    <b-jumbotron
      header="AsyncData"
      lead=" 📌 AsyncData is nuxt lifecycle method called every time page before loading page"
    >
      <p>For more lifecycle methods visit below</p>
      <b-button
        variant="primary"
        href="https://nuxtjs.org/docs/2.x/concepts/nuxt-lifecycle"
        >nuxt-lifecycle</b-button
      >
      <hr />
      <p>📌 Plugins is accessible by $ in nuxt like $axios</p>
      <hr />
      <p>📌 asyncdata structure like below</p>
      <code>
        <pre>
          asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {

          },
        </pre>
      </code>
      <hr />
      <p>📌 asyncdata when retrived , merged by data as data</p>
      <code class="text-info">name is {{ name }} and title is {{ title }}</code>
      <hr />
      <p>
        📌 if refresh page asyncdata called from server but if use nuxt-link or
        link asyncdata call from client
      </p>
      <span>click and see network tab in devtools</span>
      <br />
      <b-button variant="primary" :to="{ name: 'training-asyncdata2' }">
        go to link async2
      </b-button>
      <br />
      <hr />
      <p>📌all async data rendred from server so can find it in dom</p>
      <hr />
      <p>
        📌in asyncdata this is not accessible but can get some important like
        axios as context. see below
      </p>
      <code>
        <pre>
          asyncData({$axios}) {
            $axios.$get() ..
          },
        </pre>
      </code>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'AsyncData',
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
