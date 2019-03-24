<template>

  <div style="width: 80%;height:80%;margin:100px auto;">
    <el-row :gutter="20">
      <el-col v-for="item in docs" style="margin-top: 20px" :span="6" >
        <el-card  shadow="hover" @click.native="godoc(item.url)" style="height: 200px;cursor: pointer" >
          {{item.name}}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ip: 'http://192.168.1.2:8080/',
      docs: [
        {
          url: 'vue',
          name: 'Vue.js'
        },
        {
          url: 'element-ui',
          name: 'element-ui'
        },
        {
          url: 'element-ui-admin',
          name: 'element-ui-admin'
        },
        {
          url: 'mybatis-plus',
          name: 'mybatis-plus'
        }
      ]
    }
  },
  methods: {
    godoc: function (url) {
      window.open(this.ip + url, '_blank')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
