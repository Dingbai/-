<template>
  <div class="hello">
    hello world ni mei de
    <p>{{msg}}</p>
    <router-link to="/demo">按钮</router-link>
    <div id="app">
      <el-button @click="visible = true" class="ll">Button</el-button>
      <el-dialog :visible.sync="visible" title="Hello world">
        <p>lalala 我想上天行不行</p>
      </el-dialog>
    </div>
    <p>
       真的是烦
       <i class="icon iconfont icon-biaoqian"></i>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import {t} from '@/assets/utils/utils'
// import {store} from '@/vuex/index'
export default {
  // name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      visible: false
    }
  },
  created () {
    // this.utils.t
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped less>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
