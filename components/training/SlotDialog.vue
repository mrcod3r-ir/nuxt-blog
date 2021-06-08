<template>
  <div class="borderBox">
    <div class="text-warning">
      <slot> </slot>
    </div>
    <div class="text-danger">
      <slot name="namedContent"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.borderBox {
  border: solid 2px green;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
</style>
