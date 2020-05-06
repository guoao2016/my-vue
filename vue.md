[Vue.js最佳实践](https://segmentfault.com/a/1190000014085613)_
[目录结构](https://blog.csdn.net/Mean_/article/details/88820844)

[组件](https://segmentfault.com/a/1190000020781076?utm_source=tag-newest)
[data](https://www.cnblogs.com/DreamchaserHe/p/11765381.html)
[源码解析](https://segmentfault.com/a/1190000015846104)

[源码解析](https://juejin.im/post/5bae435b6fb9a05d0d287c13)

[面试](https://segmentfault.com/a/1190000021407782)

[Vuex](https://juejin.im/post/5dba91e4518825647e4ef18b)
[Vue中级面试题汇总](https://juejin.im/post/5d6e8969e51d45621512adcd)

vue --version 

// 创建项目 vu/cli
vue create element-form   

// 添加element
vue add element

// 添加router
vue add router

// 添加vuex
vue add vuex


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
    {
        path: '/a',
        name: 'pageA',
        components: {
        default: PageA,
        david: Test
        }
    },
    // 默认PageA
    
    <router-view/>
    // Test组件
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

        goTo(){
                // this.$router.push({name: 'pageB', params: {id: this.id} })
                this.$router.push({path: `/b/${this.id}` })

                // params 不生效
                // this.$router.push({path: '/pageB', params:{id: this.id} })
            }

     
### 二 导航守卫
    1. 全局守卫 main.js
    router.beforeEach    ------  常用
    router.beforeResolve
    router.afterEach

    2. 路由守卫  router.js  
    beforeEnter

    3. 组件内守卫
    beforeRouteEnter    // 不能获取组件实例 this
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

dispatch


mapState、 mapActions使用

```
 state: {
    count: 1,
    todos: [
        {id: 1, text: '11', done: true},
        {id: 2, text: '22', done: false},
        {id: 3, text: '33', done: true},
    ]
  },
  getters: {
      doneTodos: state => {
          return state.todos.filter(todo => todo.done)
      }
  }

  mutations: {
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    }
  },

  actions:{
    increment({commit}){
      commit('increment')
    },
    decrement({commit}){
      commit('decrement')
    }
  },



{{$store.state.count}}

import {mapState, mapActions} from 'vuex'
export default {
     computed: {
        ...mapState(['isLogin']),
        ...mapGetters(['doneTodos'])
    },

    methods: {
        ...mapActions(['login']),
        
        handleLogin(){
            this.login(model).then(
            )
        }
    }
   
}
```
  
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


### 框架
element
cube-ui


### 组件通信
props $emit  
$child
$parent

EventBus

`

methods: {  
   addCart(event) {  
   Bus.$emit('getTarget', event.target);   
   }  
}  

created() {  
    Bus.$on('getTarget', target => {  
        console.log(target);  
    });  
}  
`



1）props / $emit  适用 父子组件通信
这种方法是 Vue 组件的基础，相信大部分同学耳闻能详，所以此处就不举例展开介绍。
（2）ref 与 $parent / $children 适用 父子组件通信

ref：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例
$parent / $children：访问父 / 子实例

（3）EventBus （$emit / $on）  适用于 父子、隔代、兄弟组件通信
这种方法通过一个空的 Vue 实例作为中央事件总线（事件中心），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。
（4）$attrs/$listeners 适用于 隔代组件通信

$attrs：包含了父作用域中不被 prop 所识别 (且获取) 的特性绑定 ( class 和 style 除外 )。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 ( class 和 style 除外 )，并且可以通过 v-bind="$attrs" 传入内部组件。通常配合 inheritAttrs 选项一起使用。
$listeners：包含了父作用域中的 (不含 .native 修饰器的)  v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件

（5）provide / inject 适用于 隔代组件通信
祖先组件中通过 provider 来提供变量，然后在子孙组件中通过 inject 来注入变量。 provide / inject API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。
（6）Vuex  适用于 父子、隔代、兄弟组件通信
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
改变 store 中的状态的唯一途径就是显式地提交  (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。


总结
1. 核心
2. 最佳实践：全家桶
3. 组件设计
4. 实现原理
5. 框架
6. 展望