<template>
  <div>
    <h2>validate Page</h2>
    <br />

    <nuxt-link class="btn btn-success" to="/training/validate/5">
      validate number id page
    </nuxt-link>
    <nuxt-link class="btn btn-danger" to="/training/validate/5z">
      validate string id page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Validate',
  layout: 'training'
}
</script>

<style lang="scss" scoped></style>
