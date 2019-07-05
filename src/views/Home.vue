<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import qs from 'qs';
import axios  from 'axios';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created() {
    /** 
     *       ref3: '',
      ref4: '',
      hash: '0b8cf184422cd4e0b44cd7115a48d40f',
      amount_shipping: 0,
      amount_tax: 0,
      amount_coupon: 0,
      'item_quantity[]': '100',
      'item_name[]': 'USD',
      'item_no[]': '100',
      'item_desc[]': '100 * USD',
      'item_amount_unit[]': '1',
      card_no:''
    */
    //axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//console.log(JSON.stringify({ x: 5, y: 6 }));
    let config = {
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'//'X-Requested-With': 'XMLHttpRequest'//,
        //'Content-Encoding': 'gzip'
      }
    }

    let payLoad = {
      lastname: "jacob",
      firstname: "hsu",
    } // params: payLoad qs.stringify({params: payLoad})
    //https://w88asiapay.epspci.com/secure/txHandler.php
    axios.post('/apis/secure/txHandler.php', 
        payLoad, config
    )
    .then(function (response) {
      console.log(123, response);
    })
    .catch(function (error) {
      console.log(456, error);
    });


    /*
    let config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'blob'
    };
    let data = {"name":"test","salary":"123","age":"23"}	

    // http://dummy.restapiexample.com/
    axios.post('http://dummy.restapiexample.com/api/v1/create', data)
          .then(function (response) {
            console.log('success',response);
          })
          .catch(function (error) {
            console.log('error',error);
          });

      */
  }
}
</script>
