<template>
    <div>
        this is page B
    </div>
</template>

<script>
export default {
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