<template>
  <div>
    <div class="logo">
      <img src="https://img.kaikeba.com/logo-new.png" alt />
    </div>
    <cube-form 
        :model="model" 
        :schema="schema" 
        @submit="handleLogin" 
        @validate="haneldValidate">
    </cube-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      model: {
        username: "",
        passwd: ""
      },
      schema: {
        // 表单结构定义
        fields: [
          // 字段数组
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              // 校验规则
              required: true
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "passwd",
            label: "密码",
            props: {
              type: "password",
              placeholder: "请输入密码",
              eye: {
                open: true
              }
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions(['login']),

      // mapActions写法
     handleLogin(e) {
        e.preventDefault();
        //登录请求
        this.login(this.model)
            .then(code => {
                if(code){
                    //登录成功
                    const path = this.$route.query.redirect || '/';
                    window.console.log(path)
                    this.$router.push(path);
                }  
            }).catch( error => {
                window.console.log(error)
                // 有错误发生或者登录失败
                 const toast = this.$createToast({
                    time: 2000,
                    txt: error.message || error.response.data.message || "登录失败",
                    type: "error"
                });
                toast.show();
            })
    },

    // this.$store
    handleLogin1(e) {
        e.preventDefault();
        //登录请求
        this.$store.dispatch('login', this.model)
            .then(code => {
                if(code){
                    //登录成功
                    const path = this.$route.query.redirect || '/';
                    window.console.log(path)
                    this.$router.push(path);
                }  
            }).catch( error => {
                window.console.log(error)
                // 有错误发生或者登录失败
                 const toast = this.$createToast({
                    time: 2000,
                    txt: error.message || error.response.data.message || "登录失败",
                    type: "error"
                });
                toast.show();
            })
    },
    haneldValidate(ret) {
        window.console.log(ret)
    }
  }
};
</script>

<style>
</style>