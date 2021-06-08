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
          <b-dropdown-item href="/training/slots">slots</b-dropdown-item>
          <b-dropdown-item href="/training/watch">watch</b-dropdown-item>
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
