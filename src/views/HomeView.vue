<template>
  <div class="container">
    <h3>Rich media tree chart | 富媒体树状图</h3>
    <vue-tree
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
          <img
            :src="node.avatar"
            style="width: 48px; height: 48px; border-raduis: 4px"
          />
          <span style="padding: 4px 0; font-weight: bold"
            >能力值{{ node.value }}</span
          >
        </div>
      </template>
    </vue-tree>
  </div>
</template>

<script>
import { uuid } from "@API/utils";

export default {
  name: "HomeView",
  data() {
    return {
      richMediaData: {
        name: "James",
        value: 800,
        avatar:
          "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_female3.svg",
        children: [
          {
            name: "Bob",
            value: 400,
            avatar:
              "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_male4.svg",
            children: [
              {
                name: "C1",
                value: 100,
                avatar:
                  "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_female4.svg",
              },
              {
                name: "C2",
                value: 300,
                avatar:
                  "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_male2.svg",
              },
              {
                name: "C3",
                value: 200,
                avatar:
                  "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_male3.svg",
              },
            ],
          },
          {
            name: "Smith",
            value: 200,
            avatar:
              "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_male3.svg",
            children: [
              {
                name: "S1",
                value: 230,
                avatar:
                  "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_female1.svg",
              },
            ],
          },
          {
            name: "Jackson",
            value: 300,
            avatar:
              "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_female3.svg",
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
      console.info("1111", collapsed);
      if (!collapsed) {
        return;
      }
      node.children &&
        node.children.push({
          name: "S2",
          value: 250,
          _key: uuid(),
          avatar:
            "https://live.yworks.com/demos/complete/interactiveorgchart/resources/usericon_female1.svg",
        });

      // node = this.deepCopy(node);
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
  width: 80px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  background-color: #f7c616;
  border-radius: 4px;
}

h3 {
  margin-top: 32px;
  margin-bottom: 16px;
}
</style>
