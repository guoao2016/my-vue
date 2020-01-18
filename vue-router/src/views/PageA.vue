<template>
    <div>
        this is page A
    </div>
</template>

<script>
export default {

    created() {
          window.console.log('created')
    },

    mounted() {
          window.console.log('mounted')
    },

    destroyed() {
          window.console.log('destroyed')
    },

    beforeRouteEnter( to, from ,next ) {
        // 不能获取组件实例 this
        window.console.log('before route enter')
        next()
    },
    beforeRouteUpdate(to, from, next){
        // 可以访问组件实例 this
        window.console.log('before route update')
        next()
    },
    beforeRouteLeave(to, from ,next){
         // 可以访问组件实例 this
         window.console.log('before route leave')
         next()

    }
}
</script>

<style>

</style>