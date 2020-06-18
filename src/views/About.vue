<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'home',
  created() {
    axios.get('https://raw.githubusercontent.com/JacobHsu/vue-axios/master/db.json')
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
}
</script>
