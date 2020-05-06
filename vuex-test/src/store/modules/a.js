const state = {
    count: 1,
    todos: [
        {id: 1, text: '11', done: true},
        {id: 2, text: '22', done: false},
        {id: 3, text: '33', done: true},
      ]
}

const getters = {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
}

const mutations = {
    add(state){
        state.count++
    },
    minus(state){
        state.count--
    }
}

const actions = {
    add:({commit}) => {
        commit('add')
    },
    minus: (obj) => {
        window.console.log(obj)
        let {commit} = obj;
        commit('minus')
    }
}

export default{
    // 命名空间
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}