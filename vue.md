vue --version 
vue create element-form
vue add element

vue add router


### 原理
    new Vue
    初始化： 数据响应化
    编译：依赖收集
    Dep管理所有Watcher

### 一 router
    1. 基本路由配置
    `
        {
            path: '/a',
            name: 'pageA',
            component:  pageA
        },
        {
            path: '/b/:id',
            name: 'pageA',
            component:  pageA
        },

      <router-link to="/a">A</router-link> 
      <router-link to="{name: 'pageA'}">A</router-link>
      <router-link to="/b/123">A</router-link> 
      <router-view /> 


      this.$route.param.id

    `
    2. 异步组件(按需加载)
      {
            path: '/b/:id',
            name: 'pageA',
            component:  () => import ('../views/About.vue')
        },

    3. 命名视图
     <router-view name = "david"/>

    4. 路由跳转方式
      1. router-link
       <router-link to="/about"></router-link>

       2. this.$router.push({ path:'/about'})
        this.$router.push({ 
            path:'/about',
            query: {
                id: 001
            }
        })

        3. this.$router.replace{path：‘/’ }
### 二 导航守卫
    1. 全局守卫 main.js
    router.beforeEach    ------  常用
    router.beforeResolve
    router.afterEach

    2. 路由守卫  router.js  
    beforeEnter

    3. 组件内守卫
    beforeRouteEnter
    beforeRouteUpdate
      /a/123    ---  /a/456 触发
    beforeRouteLeave


### 三 生命周期
    beforeCreate
    created
    beforeMount
    mounted
    beforeDestroy
    destroyed


### 四 vuex
npm install vuex --save
vue add vuex

store
mutations
actions

mapActions  -- 映射
getters


mapState、 mapActions使用
`
import {mapState, mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions(['login']),
        handleLogin(){
            this.login(model).then(
            )
        }
    },
    computed: {
        ...mapState([
            'isLogin',
        ])
    }
}

  
`
### 跨域  (代理、CORS)

 devServer: {
      proxy: {
        '/api': {
            target: 'http://192.168.149.90:8080/', // 设置你调用的接口域名和端口号
            changeOrigin: true,     // 跨域
            pathRewrite: {
                '^/api': '/'          
            }
        }
      }

### 令牌
    1. beare token
     Authorization: Bearer <token>

    2. jwt
        head.payload.hash
        head: type, 
        payload: json
        hash: 
