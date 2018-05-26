<template>
  <div class="hello">
    wo shi demo
    <p>{{msg}}</p>
    <router-link to="/">我要回家</router-link>
    <p>
      demo
      <i class="icon iconfont icon-biaoqian"></i>
    </p>
  </div>
</template>

<script>
import { t } from '@/assets/utils/utils'
import Test1 from './test.js'

export default {
  name: 'demo',
  data () {
    return {
      msg: 'im demo',
      visible: false
    }
  },
  created () {
    let vm = this
    // this.utils.t
    console.log(vm)
    const tt = new Test1(vm)
    console.log(tt.color)
    tt.read()
    t()
    this.test()
    // console.log(state)
    console.log(this.$store.state.count)
    console.log(this.$store.commit('add'))
    // store.commit('increment')
    // console.log(store.state.count)
  },
  methods: {
    test () {
      this.$http.get(this.api.rotation_type).then(d => {
        console.log(d)
      })
    }
  }
}
</script>
<style lang="less" scoped>
  @import './te.less';
</style>
