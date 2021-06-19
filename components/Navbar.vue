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
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-slots' }">slots</nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-watch' }"> watch </nuxt-link>
          </b-dropdown-item>

          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-computed' }">
              computed
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-routing' }"> routing </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-asyncdata' }">
              asyncdata
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-fetch' }"> fetch </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-errorhandling' }">
              error handling
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item href="/">
            <nuxt-link :to="{ name: 'training-errorhandling2' }">
              error handling 2
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-autocompletelist' }">
              auto complete list
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-nuxt-middleware' }">
              nuxt middleware
            </nuxt-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <nuxt-link :to="{ name: 'training-validate' }">
              validate
            </nuxt-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped></style>
