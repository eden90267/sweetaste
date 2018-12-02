<template>
  <div>
    <h1>六角報名查詢</h1>

    {{ $store.state.result }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    // let { data } = await axios.post('https://www.thef2e.com/api/isSignUp', {
    //   email: 'eden90267@gmail.com'
    // })
    // return {
    //   result: data
    // }
  },
  fetch({ store }) {
    return axios
      .post('https://www.thef2e.com/api/isSignUp', {
        email: 'eden90267@gmail.com'
      })
      .then(res => {
        store.commit('RESULT', res.data)
      })
  }
}
</script>

<style scoped>
</style>
