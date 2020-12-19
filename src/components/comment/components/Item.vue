<template>
  <div class="container">
    <div class="component-container">
      <span v-text="comment.name"></span> <button type="button" @click="deleteTtem">删除</button>
      <div>{{comment.content}}</div>
      <hr>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Item",
    props: {
      'comment': Object,
      'deleteComment': Function,
      'index': Number
    },
    methods: {
      deleteTtem(){
        const {deleteComment, index} = this
        deleteComment(index)
      }
    }
  }
</script>

<style scoped>

</style>
