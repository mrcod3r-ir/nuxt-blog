<template>
  <div>
    <input
      :type="type"
      v-bind="$attrs"
      :value="value"
      v-on="{ ...$listeners, input }"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    input(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
