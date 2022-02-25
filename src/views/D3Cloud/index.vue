<!--
 * @Author: your name
 * @Date: 2022-02-24 23:24:32
 * @LastEditTime: 2022-02-25 09:40:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /d3-tree-example/src/views/D3-cloud/index.vue
-->
<template>
  <div class="siderBar">
    <!-- 词云 -->
    <div ref="wordCloudBox"></div>
  </div>
</template>

<script>
import myCloud from "./myCloud.js";
export default {
  name: "siderBar",
  data() {
    return {};
  },

  mounted() {
    let wordList = [
      { text: "vue", size: 20 },
      { text: "html", size: 25 },
      { text: "js", size: 30 },
      { text: "vue", size: 20 },
      { text: "html", size: 25 },
      { text: "js", size: 30 },
      { text: "vue", size: 20 },
      { text: "html", size: 25 },
      { text: "js", size: 30 },
      { text: "vue", size: 20 },
      { text: "html", size: 25 },
      { text: "js", size: 30 },
      { text: "vue", size: 20 },
      { text: "html", size: 25 },
      { text: "js", size: 30 },
    ];
    console.info("333");
    this.getWordCloud(wordList);
  },

  methods: {
    // 生成词云
    getWordCloud(wordList) {
      let wordOption = {
        wordList,
        size: [500, 500], // 盒子的宽高
        svgElement: this.$refs.wordCloudBox, //使用ref选择节点
      };
      myCloud(wordOption, this.getArticleList);
    },

    // 回调
    getArticleList(text) {
      console.info("2222", text);
    },
  },
};
</script>

