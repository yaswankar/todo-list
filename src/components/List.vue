<template>
  <div class="list">
    <table>
      <thead>
        <th>Sno</th>
        <th>Items</th>
        <th>Actions</th>
      </thead>
      <tr v-for="(item, idx) in items" :key="idx">
        <td>{{idx}}</td>
        <td>{{item.name}}</td>
        <td>
          <span>
            <button @click="removeItem(idx)">X</button>
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => {[]}
    }
  },
  methods: {
    removeItem(idx) {
      this.$emit('removeItem', idx);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
