<template>
  <div>
    <h2>this is routing page</h2>
    <div class="row mt-5">
      <div class="col-3">
        <b-card
          border-variant="primary"
          header="product directory approach "
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for route to product and get 404 error bcs of
            directory approach
          </b-card-text>
          <b-button variant="primary"
            ><b-link class="text-white" href="/training/routing/product"
              >go to product directory</b-link
            ></b-button
          >
        </b-card>
      </div>
      <div class="col-3">
        <b-card
          border-variant="info  "
          header="product page by slug"
          header-bg-variant="info "
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for route to product page by some slug . showing slug
            is static
            <i class="fa fa-sign-language" aria-hidden="true"></i>
          </b-card-text>
          <b-button variant="info "
            ><b-link
              class="text-white"
              href="/training/routing/product/someSlug"
              >go to product directory</b-link
            ></b-button
          >
        </b-card>
      </div>
      <div class="col-3">
        <b-card
          border-variant="success"
          header="infinite params slug"
          header-bg-variant="success"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for route to search page by infinite slug . showing
            slug is dynamic
            <i class="fa fa-sign-language" aria-hidden="true"></i>
          </b-card-text>
          <b-button variant="success"
            ><b-link
              class="text-white"
              href="/training/routing/search/slug1/slug2/slug3/slug4/slug5"
              >go to search directory</b-link
            ></b-button
          >
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Routing',
  layout: 'training'
}
</script>

<style lang="scss" scoped></style>
