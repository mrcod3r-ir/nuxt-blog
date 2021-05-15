<template>
  <header>
    <div class="row px-4 py-5 bg-light">
      <div class="col-6">
        <Logo width="40" height="40" class="ml-20" />
        <br />
        <span>logo statement</span>
      </div>
      <div class="col-6">
        <div>
          <div class="d-flex">
            <b-nav pills>
              <b-nav-item>Active</b-nav-item>
              <b-nav-item>Link</b-nav-item>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="Dropdown"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item>One</b-dropdown-item>
                <b-dropdown-item>Two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Three</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-nav>
            <b-button variant="success">Button</b-button>
          </div>
          <span class="ml-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, at.
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped></style>
