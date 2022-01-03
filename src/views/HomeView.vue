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
          <img
            :src="node.avatar"
            style="
              display: block;
              width: 48px;
              height: 48px;
              border-radius: 4px;
              margin: 0 auto;
            "
          />
          <div style="padding: 4px 0; font-weight: bold" class="text-center">
            {{ node.name }}
          </div>
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
