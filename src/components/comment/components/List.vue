<template>
  <div class="container">
    <Item :comment="comment" v-for="(comment, index) in comments" :deleteComment="deleteComment" :index="index"/>
  </div>
</template>

<script>
  import Item from "./Item"

  export default {
    name: "List",
    props: ['comments', 'deleteComment'],
    components: {Item}
  }
</script>

<style scoped>
  .container {
    margin: 20px 5px;
  }
</style>
