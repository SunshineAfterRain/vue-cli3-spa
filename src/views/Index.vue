<template>
  <div>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <cc-button>121212121</cc-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Index',
  components: {},
  methods: {
    ...mapActions('user', [
      'handleLogin' // -> this.foo()// -> this.bar()
    ])
  },
  mounted() {
    this.handleLogin('tango', '123456')
  }
}
</script>

<style lang="less" scoped></style>
