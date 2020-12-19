<template>
  <div class="container">
    <div class="header-container">
      <h3>我是头部比爱哦提</h3>
      <hr>
    </div>
    <div class="left-container">
      <Add :addComment="addComment"/>
    </div>
    <div class="right-container">
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from "./components/Add"
  import List from "./components/List"

  export default {
    name: "Comment",
    components: {
      Add, List
    },
    data() {
      return {
        comments: [
          {
            name: '饶京',
            content: '你可真行'
          }
        ]
      }
    },
    methods: {
      addComment(comment) {
        this.comments.unshift(comment)
      },
      deleteComment(index) {
        this.comments.splice(index, 1)
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
  }

  .header-container {
    margin: 10px 5px;
    text-align: center;
    color: orange;
  }

  .left-container {
    float: left;
    width: 40%;
  }

  .right-container {
    float: right;
    width: 60%;
  }
</style>
