<template>
<div class="comment-box">
  <div class="postHeader">
    {{postId}}
  <div class="length">
    {{ commentLength }}条评论
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: "postHeader",
  props: ["postId"],
  computed:{
    commentLength(){
      return this.$store.state.comment.all.length
    }
  }
};
</script>

<style scoped>
.postHeader {
  width: 70%;
  min-height: 400px;
  margin: 20px auto;
  background: #fff;
  position: relative;
}
.length{
  position: absolute;
  bottom:10px;
  right:10px;
}
</style>
