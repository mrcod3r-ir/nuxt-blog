<template>
  <div>
    <h1>nuxt life cycle</h1>
  </div>
</template>

<script>
export default {
  name: 'Life',
  layout: 'training',
  middleware() {
    console.log('middleware')
  },
  asyncData() {
    console.log('asyncData')
  },
  data() {
    return {
      counter: 0
    }
  },
  fetch() {
    console.log('fetch')
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style lang="scss" scoped></style>
