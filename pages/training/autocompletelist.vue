<template>
  <div>
    <h2>Auto Complete List</h2>
    <br />
    <h3>Search todo list</h3>
    <br />

    <input type="text" :value="title" @input="onInput" />
    <div class="text-3">title : {{ title }}</div>
    <br />
    <div v-if="loading">loading...</div>
    <div v-else>
      <b-list-group v-for="(item, i) in list" :key="i">
        <b-list-group-item>{{ item.title }}</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutoCompleteList',
  layout: 'training',
  data() {
    return {
      text: '',
      title: '',
      list: [],
      loading: 0
    }
  },
  fetch() {
    this.service()
  },
  methods: {
    onInput(e) {
      this.title = e.target.value
      this.$fetch()
    },
    service() {
      if (this.source) {
        this.source.cancel('cancel by user')
      }
      this.source = this.$axios.CancelToken.source()
      this.loading++
      this.$axios
        .$get('https://jsonplaceholder.typicode.com/todos', {
          params: { title_like: this.title },
          cancelToken: this.source.token
        })
        .then((res) => {
          this.list = res
          this.loading--
        })
        .catch((e) => {
          console.log(e)
          this.loading--
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
