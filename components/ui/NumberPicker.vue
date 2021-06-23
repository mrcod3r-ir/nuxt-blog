<template>
  <div>
    <b-button variant="success" @click="plus">plus</b-button>
    <br />
    {{ value }}
    <br />
    <b-button variant="danger" @click="minus">minus</b-button>
  </div>
</template>

<script>
export default {
  name: 'NumberPicker',
  props: {
    value: {
      type: Number,
      required: true
    },
    minValue: {
      type: Number,
      default: 0
    }
  },
  methods: {
    plus() {
      this.$emit('input', this.value + 1)
    },
    minus() {
      if (this.minValue < this.value) {
        this.$emit('input', this.value - 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
