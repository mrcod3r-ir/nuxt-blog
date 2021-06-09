<template>
  <div>
    <h2>product index page</h2>
    <div class="row">
      <pre>
      passed queries : 
    </pre
      >
      <code>
        {{ $route.query }}
      </code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductIndex'
}
</script>

<style lang="scss" scoped></style>
