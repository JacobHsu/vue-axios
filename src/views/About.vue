<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form :action="OnlineBankUrl" ref="form0" id="form0" method="post">
      <input type="hidden" id="Amount" name="Amount" />
      <input type="hidden" id="ReturnUrl" name="ReturnUrl" />
    </form>
    <button type="submit" value="Submit" @click.prevent="processSubmit">Submit</button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        OnlineBankUrl: 'https://w88asiapay.epspci.com/secure/txHandler.php'
      }
    },
    created() {
      console.log(this.OnlineBankUrl)
    },
    methods: {
      processSubmit() {
        this.$store.dispatch('apiMethods', {
          amount: 100,
          returnUrl:  '/result'
        }).then(res => {
          console.log('apiMethods res:', res)
          document.getElementById('Amount').value = res.Amount
          document.getElementById('ReturnUrl').value = res.ReturnUrl
        }).then(() => {
          console.log('form submit', this.$refs.form0)
          // 使用$refs訪問Vue中的DOM
          //this.$refs.form0.submit()
        }).catch(err => {
          console.log('err',err)
        })

      }
    }
}
</script>
