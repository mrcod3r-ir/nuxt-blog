export default function (context) {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log('api middleware request resolved')
      resolve({ user_id: 1 })
    }, 2000)
  })

  if (process.server) {
    return promise
  }
}
