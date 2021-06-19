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
  model: {
    event: 'change',
    prop: 'value'
  },
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
      this.$emit('change', this.value + 1)
    },
    minus() {
      if (this.minValue < this.value) {
        this.$emit('change', this.value - 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
