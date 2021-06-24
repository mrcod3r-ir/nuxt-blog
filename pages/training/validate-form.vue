<template>
  <div>
    <h1>ValidateForm</h1>
    <br />
    <app-form :on-submit="onSubmit">
      <div>
        <label>title : </label>
        <app-text-input
          v-model="form.title"
          :placeholder="$t('placeholder.default', [$t('title')])"
          name="title"
          rules="required"
        ></app-text-input>
      </div>
      <div>
        <label>body : </label>
        <app-text-input
          v-model="form.body"
          :placeholder="$t('placeholder.default', [$t('body')])"
          name="body"
          rules="required"
        ></app-text-input>
      </div>
      <div>
        <label>user id : </label>
        <app-text-input
          v-model="form.userId"
          :placeholder="$t('placeholder.default', [$t('userId')])"
          name="userId"
          rules="required"
        ></app-text-input>
      </div>
    </app-form>
  </div>
</template>

<script>
export default {
  name: 'ValidateForm',
  layout: 'training',
  data() {
    return {
      form: {
        title: '',
        body: '',
        userId: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
