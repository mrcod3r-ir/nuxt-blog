<template>
  <div>
    <h2>this is routing page</h2>
    <div class="row mt-5">
      <div class="col-3 mb-3">
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
      <div class="col-3 mb-3">
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
      <div class="col-3 mb-3">
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
      <div class="col-3 mb-3">
        <b-card
          border-variant="warning"
          header="route query params"
          header-bg-variant="warning"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for route to search page by query params
            <i class="fa fa-sign-language" aria-hidden="true"></i>
          </b-card-text>
          <b-button variant="warning"
            ><b-link
              class="text-white"
              href="/training/routing/search/query?query_param1=param1&query_param2=param2"
              >search query page</b-link
            ></b-button
          >
        </b-card>
      </div>

      <div class="col-3 mb-3">
        <b-card
          border-variant="danger"
          header="navigate  without param"
          header-bg-variant="danger"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for navigate to page without param passing in
            nuxt-link
          </b-card-text>
          <b-button variant="danger">
            <nuxt-link
              class="text-white"
              :to="{ name: 'training-routing-navigate' }"
              >navigate to product</nuxt-link
            ></b-button
          >
        </b-card>
      </div>
      <div class="col-3 mb-3">
        <b-card
          border-variant="primary"
          header="navigate by param"
          header-bg-variant="primary"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for navigate to page by param passing in nuxt-link
          </b-card-text>
          <b-button variant="primary">
            <nuxt-link
              class="text-white"
              :to="{
                name: 'training-routing-product',
                params: { slug: 'some_slug' }
              }"
              >go to product</nuxt-link
            >
          </b-button>
        </b-card>
      </div>
      <div class="col-3 mb-3">
        <b-card
          border-variant="warning"
          header="navigate by method"
          header-bg-variant="warning"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for navigate to page by method by passing in nuxt-link
          </b-card-text>
          <b-button variant="warning" @click="navigateToProduct()">
            go to product
          </b-button>
        </b-card>
      </div>
      <div class="col-3 mb-3">
        <b-card
          border-variant="info"
          header="navigate by query"
          header-bg-variant="info"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for navigate to page by passing query and params in
            nuxt-link
          </b-card-text>
          <b-button variant="info">
            <nuxt-link
              class="text-white"
              :to="{
                name: 'training-routing-product',
                params: { slug: 'some_slug' },
                query: {
                  q1: 'some_query',
                  query2: 'another_parameter',
                  brand_id: [74, 65]
                }
              }"
              >go to product</nuxt-link
            >
          </b-button>
        </b-card>
      </div>
      <div class="col-3 mb-3">
        <b-card
          border-variant="success"
          header="append query"
          header-bg-variant="success"
          header-text-variant="white"
          align="center"
          style="height: 15rem"
        >
          <b-card-text
            >click button for navigate to navigate page for test append query
          </b-card-text>
          <b-button variant="success">
            <nuxt-link
              class="text-white"
              :to="{
                name: 'training-routing-navigate',
                query: {
                  q1: 'some_query',
                  brand_id: [74, 65]
                }
              }"
              >go to navigate</nuxt-link
            >
          </b-button>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Routing',
  layout: 'training',
  methods: {
    navigateToProduct() {
      alert('navigating by method this.$router.push()')
      this.$router.push({
        name: 'training-routing-product',
        params: { slug: 'some_slug' }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
