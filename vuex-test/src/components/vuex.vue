<template>
  <div>
      <p>vuex</p>  
      <p>count</p>
      <button @click="minus">-</button>
      <!-- {{$store.state.count.count}} -->
      {{count}}
      <button @click="add">+</button>

      <p>number</p>
       <button @click="decrement">-</button>
      <!-- {{$store.state.number.number}} -->
      {{number}}
      <button @click="increment">+</button>

      <p>todo list</p>
      <ul>
        <li v-for="todo in doneTodos" :key="todo.id">{{todo.text}}</li>
      </ul>

      <ul>
        <li v-for="todo in $store.getters['count/doneTodos']" :key="todo.id">{{todo.text}}</li>
      </ul>
  </div>



</template>

<script>
// vuex modules
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
  mounted() {
    window.console.log(this.$store.getters['count/doneTodos'])
  },

  computed: {
    ...mapState('count',['count']),
    ...mapState('number',['number']),
    ...mapGetters('count',['doneTodos'])
  },


  methods: {

    // 命名空间
    // ...mapActions('count',['add', 'minus']),
    ...mapActions({
      add: 'count/add',
      minus: 'count/minus'
    }),
    // 重命名
    ...mapActions('number',{
        increment: 'add',
        decrement: 'minus'
    })
  },
      
}
</script>

<style>

</style>