<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      posts: {{posts}}
    </p>
    <p>
      comments: {{comments}}
    </p>
  </div>
</template>

<script>
import { apiComments, apiGetPosts, delay2s } from "@/request/api";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  created() {
    this.onLoad();
  },
  data() {
    return {
      posts: "",
      comments: "",
    };
  },
  methods: {
    // 获取数据
    async onLoad() {
      // 调用api接口，并且提供了两个参数
      await apiComments({
        type: 0,
        sort: 1,
      }).then((res) => {
        // 获取数据成功后的其他操作
        this.comments = res[0]
        console.log('comments',res);
      });
      await delay2s()
      await apiGetPosts().then((res) => {
        // 获取数据成功后的其他操作
        this.posts = res[0]
        console.log('posts',res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
