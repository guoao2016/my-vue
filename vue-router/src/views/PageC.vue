<template>
    <div>this is page C
        <p>{{id}}</p>
        <router-view />
    
    </div>
</template>

<script>
export default {
    props: ['id'],
    mounted() {
        window.console.log(this.id)
    }
}
</script>

<style>

</style>