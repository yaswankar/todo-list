<template>
  <div id="app">
    <h1>Todo List</h1>
    <div class="inputSection">
      <input type="text" v-model="itemName" />
      <button class="add-btn" @click="addItem">ADD</button>
    </div>
    <List :items="items" @removeItem="removeFromList"/>
  </div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',
  data() {
    return {
      itemName: "",
      items: []
    };
  },
  components: {
    List
  },
  methods: {
    removeFromList(idx) {
      this.items.splice(idx, 1);
    },
    addItem() {
      if(this.itemName == "") return;
      this.items.push({
        name: this.itemName
      });
      this.itemName = "";
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .inputSection {
    .add-btn {
      margin-left: 10px;
    }
  }
}
</style>
