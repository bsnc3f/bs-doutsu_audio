<template>
<div id="app">
<h2> ToDo List </h2>
  <form v-on:submit.prevent>
    <input type="text" v-model="newItem">
    <button v-on:click="addItem">
      Add
    </button>
  </form>
  <ul>
    <li v-for="(todo, index) in todos" :key='todo.item'>
    <!-- <li v-for="(todo, index) in todos" :key='todo.item'> -->
      <input type="checkbox" v-model="todo.isDone">
      <span v-bind:class="{ done: todo.isDone }">{{ todo.item }}</span>
      <button v-on:click="deleteItem(index)">Delete</button>
    </li>
  </ul>
  <pre> {{ $data }} </pre>
</div>

</template>

<script>
export default {
  name: "app",
  data() {
    return {
      newItem: '',
      todos: []
      }
  },
  methods: {
    addItem: function() {
      if(this.newItem == '') return;

      var todo = {
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo);
      this.newItem = '';
      // alert();
    },
    deleteItem: function(index) {
      // alert(index);
    this.todos.splice(index, 1);
    }
  }
}
</script>

<style scoped>
#app ul {
  list-style: none;
}

#app li > span.done {
  text-decoration: line-through;
}
</style>
