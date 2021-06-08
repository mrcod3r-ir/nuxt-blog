<template>
  <div>
    <b-jumbotron
      header="search page"
      lead="search page by infinite dynamic slug"
    >
      <p>showing slug is dynamic</p>
      <br />
      <p>slugs is :</p>

      <b-list-group>
        <b-list-group-item v-for="(slug, i) in getParams" :key="i"
          >{{ slug }}
        </b-list-group-item>
      </b-list-group>
      <b-input-group class="mt-3">
        <b-form-input v-model="newSlug"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="addToParams()"
            >add slug to router</b-button
          >
        </b-input-group-append>
      </b-input-group>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Search',
  layout: 'training',
  data() {
    return {
      slugs: [],
      newSlug: ''
    }
  },
  computed: {
    getParams() {
      return this.$route.params.pathMatch.split('/')
    }
  },
  watch: {
    slugs: {
      handler(oldVal, newVal) {
        if (oldVal !== newVal) {
          this.getParams()
        }
      }
    }
  },
  mounted() {
    console.log(this.$route.params.pathMatch)
  },
  methods: {
    addToParams() {
      this.$router.push(this.newSlug)
    }
  }
}
</script>

<style lang="scss" scoped></style>
