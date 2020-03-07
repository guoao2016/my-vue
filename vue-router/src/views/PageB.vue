<template>
    <div>
        this is page B.
        {{id}}
    </div>
</template>

<script>
export default {
    props: ['id'],
    created(){ 
        window.console.log(this.$route)
        window.console.log(this.$route.params.id)
    },
    mounted(){
      
    }
}
</script>

<style>

</style>