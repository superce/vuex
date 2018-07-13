<template>
  <div class="app">
    <div class="footer">
      <div class="botton">
        <input type="text" placeholder="请输入" v-model="msg" class="input">
        <input type="submit" value="提交" @click="submitComments()">
      </div>
      <div v-for="comment in reverseComments" :key="comment.id" class="cloumn">
        {{comment.body}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "postFooter",
  data: () => ({
    msg: ""
  }),
  computed: {
    comments() {
      return this.$store.state.comment.all;
    },
    reverseComments() {
      return this.comments.slice().reverse();
    }
  },
  methods: {
    submitComments() {
      let comment = {
        id: (this.comments.length + 1).toString(),
        body: this.msg
      };
      // this.comments.push(comment);
      // 使用mutation
      // this.$store.commit('addComment',comment)
      //使用action
      this.$store.dispatch({ type: "addComment", comment });
      this.msg = "";
    }
  }
};
</script>

<style scoped>
.footer {
  width: 70%;
  min-height: 400px;
  margin: 20px auto;
  background: #fff;
}
.botton {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
}
.botton .input {
  flex-grow: 1;
}
.cloumn {
  width: 90%;
  margin: 10px auto;
}
</style>