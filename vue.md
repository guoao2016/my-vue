vue --version 
vue create element-form
vue add element

vue add router


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
    3. 命名视图

### 二 导航守卫
    1. 全局守卫 main.js
    router.beforeEach
    router.beforeResolve
    router.afterEach

    2. 路由守卫  router.js  
    beforeEnter

    3. 组件内守卫
    beforeRouteEnter
    beforeRouteUpdate
      /a/123    ---  /a/456 触发
    beforeRouteLeave


### 二 生命周期
    beforeCreate
    created
    beforeMount
    mounted
    beforeDestroy
    destroyed
