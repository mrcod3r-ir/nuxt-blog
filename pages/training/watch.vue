<template>
  <div>
    <h2>watch</h2>
    <b-button variant="danger" @click="count--">minus-</b-button>
    <b-button variant="success" @click="count++">plus+</b-button>
    <h3>
      <b-badge class="h1">count :</b-badge>
      <b-badge variant="primary"> {{ count }}</b-badge>
    </h3>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="primary"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      {{ alertMsg }}
      <br />
      {{ dismissCountDown }} seconds...
    </b-alert>
    <hr />
    <b-button variant="outline-primary" @click="myObject.child.a++"
      >myObject.child.a++</b-button
    >

    <pre dir="ltr" class="bg-light p-3"
      >{{ myObject }}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Watch',
  layout: 'training',
  data() {
    return {
      count: 0,
      myObject: {
        child: { a: 1 }
      },
      ShowAlert: false,
      alertMsg: 'nothing',
      dismissSecs: 5,
      dismissCountDown: 0
    }
  },

  watch: {
    count: {
      handler(oldValue, newValue) {
        console.log(oldValue, newValue)
        this.setAlertMsg(oldValue, newValue)
        this.showAlert()
      }
    },
    myObject: {
      handler(oldValue, newValue) {
        console.log(oldValue, newValue)
        alert(`new value is ${newValue.child.a}`)
      },
      deep: true
    }
  },
  methods: {
    setAlertMsg(oldVal, newVal) {
      this.alertMsg = `${oldVal} changes to ${newVal}`
    },
    setAlertMsg2(oldVal, newVal) {
      this.alertMsg = `${oldVal.child.a} changes to ${newVal.child.a}`
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style lang="scss" scoped></style>
