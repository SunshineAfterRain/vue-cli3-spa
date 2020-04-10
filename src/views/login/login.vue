<template>
  <div class="login">
    login组件
  </div>
</template>
<script>
export default {
  name: 'login',
  mounted() {
    this.$store.dispatch('handleLogin')
  }
}
</script>
<style lang="less" scoped>
.login {
}
</style>
