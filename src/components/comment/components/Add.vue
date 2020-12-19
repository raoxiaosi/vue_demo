<template>
  <div class="container">
    <form>
      用户名：<input type="text" name="name" v-model="name"/>
      <br>
      <br>
      评论内容:
      <textarea rows="12" cols="50" name="content" v-model="content"></textarea>
      <br>
      <br>
      <button type="button" @click="submitComment">提交</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Add",
    props: {
      addComment:Function
    },
    data() {
      return {
        name: '',
        content: ''
      }
    },
    methods: {
      submitComment() {
        const name = this.name.trim();
        const content = this.content.trim();
        if (!name || !content) {
          alert("姓名或内容不能为空")
          return
        }
        let comment = {
          name,
          content
        }
        // 提交
        this.addComment(comment)

        this.content = ''
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 20px 50px;
  }
</style>
