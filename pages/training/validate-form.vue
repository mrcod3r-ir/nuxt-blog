<template>
  <div>
    <h1>ValidateForm</h1>
    <br />
    <div v-show="formResponse">
      <h2>Response of Form</h2>
      <br />
      {{ formResponse }}
      <br />
    </div>
    <app-form ref="validateForm" :on-submit="onSubmit">
      <div>
        <label>title : </label>
        <app-text-input
          v-model="form.title"
          :placeholder="$t('placeholder.default', [$t('fields.title')])"
          name="title"
          rules="required"
          type="text"
        ></app-text-input>
      </div>
      <br />
      <div>
        <label>body : </label>
        <app-text-input
          v-model="form.body"
          :placeholder="$t('placeholder.default', [$t('fields.body')])"
          name="body"
          type="text"
          rules="required"
        ></app-text-input>
      </div>
      <br />
      <div>
        <label>user id : </label>
        <app-text-input
          v-model="form.userId"
          :placeholder="$t('placeholder.default', [$t('fields.userId')])"
          name="userId"
          rules="required"
          type="number"
        ></app-text-input>
      </div>
      <br />
      <button class="btn btn-success" type="submit">submit form</button>
    </app-form>
  </div>
</template>

<script>
import AppForm from '@/components/ui/AppForm.vue'
import AppTextInput from '@/components/ui/AppTextInput.vue'
export default {
  name: 'ValidateForm',
  components: { AppForm, AppTextInput },
  layout: 'training',
  data() {
    return {
      form: {
        title: '',
        body: '',
        userId: ''
      },
      formResponse: ''
    }
  },
  methods: {
    onSubmit() {
      this.formResponse = ''
      this.$axios
        .$post('https://jsonplaceholder.typicode.com/posts', this.form)
        .then((res) => {
          this.form.title = ''
          this.form.body = ''
          this.form.userId = ''
          this.formResponse = res
          this.$refs.validateForm.reset()
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
