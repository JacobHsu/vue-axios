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
    //https://opendata.epa.gov.tw/ws/Data/AQI/?$format=json
    //http://opendata.epa.gov.tw/webapi/api/rest/datastore/355000000I-000259
    const appsScript = 'https://script.google.com/macros/s/AKfycbzpaLal177Ah53qqXy2S9vLQonRFzDTESMlmb05C-ZEc9mXGfFR/exec';
    axios.get(appsScript+`?url=https://opendata.epa.gov.tw/ws/Data/AQI/?$format=json`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });



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
        'Content-Type': 'multipart/from-data'//'X-Requested-With': 'XMLHttpRequest'//, application/x-www-form-urlencoded
        //'Content-Encoding': 'gzip'
      }
    }

    let payLoad = {
      lastname: "jacob",
      firstname: "hsu",
    } // params: payLoad qs.stringify({params: payLoad})
    //https://w88asiapay.epspci.com/secure/txHandler.php
    //, config
    axios.post('https://w88asiapay.epspci.com/secure/txHandler.php', 
        JSON.stringify(payLoad)
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
