<template>
  <div>
    <h2>computed</h2>
    <br />
    <h3>standard list table</h3>
    <b-table striped hover :items="list"></b-table>
    <br />
    <h3>computed list</h3>
    <b-list-group>
      <template v-for="(item, i) in filteredList">
        <b-list-group-item :key="i">
          name : {{ item.name }} - age : {{ item.age }}
        </b-list-group-item>
      </template>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'Computed',
  layout: 'training',
  data() {
    return {
      list: [
        { id: 1, name: 'Ali', age: 30 },
        { id: 2, name: 'Reza', age: 12 },
        { id: 3, name: 'Javad', age: 15 },
        { id: 4, name: 'Mahdi', age: 23 },
        { id: 5, name: 'Hosein', age: 45 }
      ]
    }
  },
  computed: {
    filteredList() {
      return this.list.filter((item) => item.age > 18)
    }
  }
}
</script>

<style lang="scss" scoped></style>
