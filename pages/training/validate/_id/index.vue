<template>
  <div>
    <h2>Validate Id</h2>
  </div>
</template>

<script>
export default {
  name: 'ValidateId',
  layout: 'training',
  validate({ params, error }) {
    error({ statusCode: 500, message: 'خطایی رخ داده است' })
    return /^\d+$/.test(params.id)
  }
}
</script>

<style lang="scss" scoped></style>
