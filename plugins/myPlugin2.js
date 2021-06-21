export default function (context, inject) {
  console.log('myPlugin2 called')
  inject('myPlugin2', {
    test() {
      console.log('test from inject')
    }
  })
}
