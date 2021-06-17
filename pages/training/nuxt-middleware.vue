<template>
  <div>
    <h2>Nuxt Middleware</h2>
  </div>
</template>

<script>
export default {
  name: 'NuxtMiddlware',
  layout: 'training',
  // for active local middleware uncomment below
  // middleware: ['auth'],
  fetch() {
    return new Promise((resolve) => {
      console.log(`fetch resolve`)
      resolve(true)
    })
  },
  mounted() {
    console.log('NuxtMiddlware page')
  }
}
</script>

<style lang="scss" scoped></style>
