<template>
  <section>
    <h2 @click="login">OIDC login: google</h2>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  auth: false,
  methods:{
    login(){
      this.$auth.loginWith('google')
    }
  }
})
</script>
