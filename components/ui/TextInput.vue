<template>
  <div>
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      v-on="{ ...$listeners, input }"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  model: { event: 'change', prop: 'value' },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    input(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
