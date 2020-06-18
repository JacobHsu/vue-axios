<template>
  <div id="app1">
    {{ jsonServerRes }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App1",
  data() {
    return {
      jsonServerRes: ''
    }
  },
  async mounted() {
    let res = await axios.get('https://raw.githubusercontent.com/JacobHsu/vue-axios/master/db.json')
    // http://localhost:8080/api/posts
    // http://localhost:8080/api/comments
    // http://localhost:8080/api/profile
    const key = this.$route.params.id
    this.jsonServerRes  = res.data[key]
  }
};
</script>
