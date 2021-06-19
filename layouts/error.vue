<template>
  <div class="container mt-5 text-center">
    <h1 class="text-danger">{{ error.statusCode }}</h1>
    <h2 class="text-warning">{{ error.message }}</h2>
  </div>
</template>
<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
<style></style>
