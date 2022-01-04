<template>
  <div class="container">
    <h3>Rich media tree chart</h3>
    <div style="display: flex" class="mb20">
      <el-button @click="controlScale('bigger')">+</el-button>
      <el-button @click="controlScale('smaller')">-</el-button>
      <el-button @click="controlScale('restore')">1:1</el-button>
    </div>
    <vue-tree
      ref="scaleTree"
      style="width: 800px; height: 600px; border: 1px solid gray"
      :dataset="richMediaData"
      :config="treeConfig"
    >
      <template v-slot:node="{ node, collapsed }">
        <div
          class="rich-media-node"
          :style="{ border: collapsed ? '2px solid grey' : '' }"
          @click="onClickNodeItem(node, collapsed)"
        >
          <el-popover placement="top-start" width="200" trigger="hover">
            <el-button
              v-if="!collapsed"
              @click="onClickAddChildNode(node, collapsed)"
              size="mini"
              >添加子节点</el-button
            >
            <el-button @click="onClickDelNode(node)" size="mini"
              >删除该节点</el-button
            >
            <div slot="reference" class="text-center">{{ node.data.name }}</div>
          </el-popover>
          <img
            :src="node.data.avatar"
            style="
              display: block;
              width: 48px;
              height: 48px;
              border-radius: 4px;
              margin: 0 auto;
            "
          />
        </div>
      </template>
    </vue-tree>
  </div>
</template>

<script>
import { uuid } from "@API/utils";
import VueTreeOne from "@/components/VueTreeOne.vue";

export default {
  components: { VueTreeOne },
  name: "HomeView",
  data() {
    return {
      richMediaData: {
        name: "释迦摩尼",
        value: 800,
        avatar:
          "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
        children: [
          {
            name: "菩萨",
            value: 400,
            avatar:
              "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
            children: [
              {
                name: "文殊",
                value: 100,
                avatar:
                  "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
              },
              {
                name: "虚空藏",
                value: 300,
                avatar:
                  "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
              },
              {
                name: "观世音",
                value: 200,
                avatar:
                  "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
              },
            ],
          },
          {
            name: "救脱",
            value: 200,
            avatar:
              "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
            children: [
              {
                name: "陀和",
                value: 230,
                avatar:
                  "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
              },
            ],
          },
          {
            name: "后大势至",
            value: 300,
            avatar:
              "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
          },
        ],
      },
      treeConfig: { nodeWidth: 120, nodeHeight: 80, levelHeight: 200 },
    };
  },
  computed: {},
  methods: {
    // 点击node item
    onClickNodeItem(node, collapsed) {
      if (!collapsed) {
        return;
      }
      node.children &&
        node.children.push({
          name: "S2",
          value: 250,
          _key: uuid(),
          avatar:
            "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
        });

      // node = this.deepCopy(node);
    },

    // 点击添加子节点
    onClickAddChildNode(node, collapsed) {
      // if (!collapsed) {
      //   return;
      // }
      if (!node.children) {
        node.children = [];
      }
      node.children &&
        node.children.push({
          name: "S2",
          value: 250,
          _key: uuid(),
          avatar:
            "https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",
        });
      console.info("11111", node.children);
      this.$refs.scaleTree.draw();
    },

    // 删除当前节点
    onClickDelNode(node) {
      console.info("node", node);
      // node = "";
      // console.info("_key", node.  d_key);
      // this.richMediaData.children.splice(2, 1);
      const parent = node.parent;
      const children = parent.children || parent.data;
      console.info("children", children);
      const index = children.findIndex(
        (item) => item.data.name === node.data.name
      );
      console.info("index", index);
      children.splice(index, 1);

      // console.info("1111", this.richMediaData);
      // this.$refs.scaleTree.draw();
    },

    /**
     * Returns a deep copy of selected node (copy of itself and it's children).
     * If selected node or it's children have no '_key' attribute it will assign a new one.
     **/
    deepCopy(node) {
      let obj = { _key: uuid() };
      for (var key in node) {
        if (node[key] === null) {
          obj[key] = null;
        } else if (Array.isArray(node[key])) {
          obj[key] = node[key].map((x) => this.deepCopy(x));
        } else if (typeof node[key] === "object") {
          obj[key] = this.deepCopy(node[key]);
        } else {
          obj[key] = node[key];
        }
      }
      return obj;
    },

    controlScale(command) {
      switch (command) {
        case "bigger":
          this.$refs.scaleTree.zoomIn();
          break;
        case "smaller":
          this.$refs.scaleTree.zoomOut();
          break;
        case "restore":
          this.$refs.scaleTree.restoreScale();
          break;
      }
    },
  },
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rich-media-node {
  width: 100px;
  padding: 8px;
  color: white;
  background-color: #f7c616;
  border-radius: 4px;
}

h3 {
  margin-top: 32px;
  margin-bottom: 16px;
}
</style>
