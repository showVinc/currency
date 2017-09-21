<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created(){
      //存取token
      if (localStorage.getItem('userId')) {
        this.$store.dispatch('user', {uid: localStorage.getItem('userId')})
      }
    }
  }
</script>
<style>

</style>
