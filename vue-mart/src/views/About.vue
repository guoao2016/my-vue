<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{name}}</p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: ''
    }
  },
  
  created() {
    window.console.log(this.$store)
    axios.get('/api/userinfo').then(res => {
      window.console.log(res)
      this.name = res.data.data.name;
    })

    axios.get('/api/test').then(res => {
      window.console.log(res)
    })
  }
}
</script>
