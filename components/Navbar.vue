<template>
  <b-navbar toggleable="lg" type="tertiary" variant="tertiary">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="justify-content-end">
      <b-navbar-nav>
        <b-nav-item href="/" class="small">
          <b-icon-house-fill></b-icon-house-fill>
          Home
        </b-nav-item>
        <b-nav-item href="/about" class="small">
          <b-icon-info-circle-fill></b-icon-info-circle-fill>
          About
        </b-nav-item>
        <b-nav-item href="/contact" class="small">
          <b-icon-envelope-fill></b-icon-envelope-fill>
          Contact
        </b-nav-item>
        <b-nav-item href="/blog" class="small">
          <b-icon-pencil-fill></b-icon-pencil-fill>
          Blog
        </b-nav-item>
        <b-nav-item href="/login" class="small">
          <b-icon-power></b-icon-power>
          Login
        </b-nav-item>

        <b-nav-item-dropdown right class="small">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-icon-pencil></b-icon-pencil>
            Training
          </template>
          <template v-for="(link, index) in trainingLinks">
            <b-dropdown-item
              :key="index"
              :href="'/' + link.link.replace('-', '/')"
            >
              {{ link.title }}
            </b-dropdown-item>
          </template>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      trainingLinks: [
        { link: 'training-slots', title: 'slots' },
        { link: 'training-watch', title: 'watch' },
        { link: 'training-computed', title: 'computed' },
        { link: 'training-routing', title: 'routing' },
        { link: 'training-asyncdata', title: 'asyncdata' },
        { link: 'training-fetch', title: 'fetch' },
        { link: 'training-errorhandling', title: 'error handling' },
        { link: 'training-errorhandling2', title: ' error handling 2' },
        { link: 'training-autocompletelist', title: 'auto complete list' },
        { link: 'training-nuxt-middleware', title: 'nuxt middleware' },
        { link: 'training-validate', title: 'validate' },
        { link: 'training-form', title: 'form' },
        { link: 'training-custom-ui', title: 'custom-ui' },
        { link: 'training-life', title: 'life' },
        { link: 'training-plugin', title: 'plugin' },
        { link: '', title: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
