<template>
  <div>
    <h3>hahahahahahaha</h3>
    <li :key="todo.text" v-for="todo in todos">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
  </div>
</template>

<script>

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  }
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
