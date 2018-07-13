<template>
  <div class="post">
    <div class="upper">
      <postHeader :postId="postId"/>
    </div>
    <div class="bottom">
      <postFooter />
    </div>
  </div>
</template>

<script>
import postHeader from "./postHeader";
import postFooter from "./postFooter";
export default {
  components: {
    postHeader,
    postFooter
  },
  name: "post",
  computed:{
    postId(){
      return this.$route.params.id
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
}
.upper {
  width: 100%;
  background: #03a9f4;
}
.bottom {
  width: 100%;
  background: rgba(225, 225, 225,.6);
}
</style>