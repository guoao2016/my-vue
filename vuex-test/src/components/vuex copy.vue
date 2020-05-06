<template>
  <div>
      <p>vuex</p>  
      <!-- <button @click="minus"> -</button> -->
      <button @click="decrement"> -</button>
      {{$store.state.count}}
      <!-- <button @click="add">+</button> -->
      <button @click="increment">+</button>
      <button @click="test">test</button>
  </div>


  
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    // methods: {
    //     add() {
    //         this.$store.dispatch('increment')
    //     },
    //     minus(){
    //         this.$store.dispatch('decrement')
    //     },
    // }

    // methods: mapActions([
    //     'increment',
    //     'decrement'
    // ])
    computed: {
        ...mapState(['count'])
           
    },
    methods: {
        ...mapActions([
            'increment',
            'decrement'
        ]),

        test() {
            window.console.log('test')
        }
    }
}
</script>

<style>

</style>