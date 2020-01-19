[Vue.js最佳实践](https://segmentfault.com/a/1190000014085613)_
[目录结构](https://blog.csdn.net/Mean_/article/details/88820844)

[组件](https://segmentfault.com/a/1190000020781076?utm_source=tag-newest)
[data](https://www.cnblogs.com/DreamchaserHe/p/11765381.html)
[源码解析](https://segmentfault.com/a/1190000015846104)

[面试](https://segmentfault.com/a/1190000021407782)

vue --version 

// 创建项目 vu/cli
vue create element-form   

// 添加element
vue add element

// 添加router
vue add router


### Object.defineProperty
    [Object.defineProperty](https://www.cnblogs.com/ajianbeyourself/p/8962813.html)
    let hero = {}
    let val = 3000
    Object.defineProperty(hero, 'health', {
      get () {
        console.log('我的health属性被读取了！')
        return val
      },
      set (newVal) {
        console.log('我的health属性被修改了！')
        val = newVal
      }
    })
    
    // hero.health
    // hero.health = 1

### 原理
    new Vue
    初始化： 数据响应化
    编译：依赖收集
    Dep管理所有Watcher

### 一 router
    1. 基本路由配置
    `
    const routes = [
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

    ]

    export default new Router({
        mode: 'history',
        routes
    })

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


### 三 emit

`
    子组件 

   <button @click="minus(index)">-</button>
    methods: {
        minus(index){
            this.$emit('removeItem', index)
        }
    }

    父组件

    <cart @removeItem="remove"></cart>

    methods: {
        remove(indxe){
            this.coureItem.splice(index, 1)
        }
    }
`


### 四 生命周期
    beforeCreate
    created
    beforeMount
    mounted
    beforeDestroy
    destroyed


### 五 vuex
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


### vue服务端渲染ssr


### watch
methods: {
    fetchList(){
        return list;
    }
}
watch: {
  a: function (val, oldVal) {
    console.log('new a: %s, old: %s', val, oldVal)
  },
  
  // 方法名
  b: 'someMethod',
  
  // 深度 watcher
  c: {
    handler: function (val, oldVal) {
      console.log('new c: %s, old: %s', val, oldVal)
    },
    deep: true
  },
  
  // 该回调将会在侦听开始之后被立即调用
  // 进入页面之前调用一次，监听项改变调用一次
  d: {
    //handler: function (val, oldVal) {
    //  console.log('new d: %s, old: %s', val, oldVal)
    //},
    handler: 'fetchList',
    immediate: true
  }

### vue debounce

`
    <Input  @on-change="inputChange"></Input>
    searchFund() {
        this.getData()
    }

    searchFundDebounce:_.debounce(function() {this.searchFund ()}, 200),

    inputChange() {
        this.searchFundDebounce();
    },
`
