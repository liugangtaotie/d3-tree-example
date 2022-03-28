<template>
  <div class="hello">
    <div id="relation-box">
      <div
        class="node"
        v-for="item in nodeList"
        :key="item.id"
        :style="{ left: item.left, top: item.top }"
        :id="'node-' + item.id"
      >
        {{ item.name }}
        <div>custom...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from "jsplumb";
import * as D3 from "d3";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      jsPlumbInstance: "", // 画线实例
      // jsPlumb默认配置
      jsPlumbSetting: {
        Container: "relation-box",
        // 连线的样式 StateMachine、Flowchart
        Connector: ["Bezier", { curviness: 100 }],
        // 鼠标不能拖动删除线
        ConnectionsDetachable: false,
        // 删除线的时候节点不删除
        DeleteEndpointsOnDetach: false,
        // 连线的端点
        Endpoint: ["Dot", { radius: 3 }],
        PaintStyle: { stroke: "#c0c4ca", strokeWidth: 1 },
        EndpointStyle: {
          stroke: "#888",
          fill: "#fff",
        },
      },
      jsPlumbConnectOptions: {
        isSource: true,
        isTarget: true,
        // 动态锚点、提供了4个方向 Continuous、AutoDefault
        anchor: "AutoDefault",
      },

      dataList: {
        id: 1,
        name: "中国",
        children: [
          {
            id: 2,
            name: "北京",
            children: [
              {
                id: 6,
                name: "海淀区",
              },
              {
                id: 7,
                name: "高新区",
              },
            ],
          },
          {
            id: 3,
            name: "贵州",
            children: [
              {
                id: 4,
                name: "贵阳",
              },
              {
                id: 5,
                name: "黔西南",
              },
              {
                id: 8,
                name: "黔东南",
              },
            ],
          },
        ],
      },
      nodeList: [],
      lineList: [],
    };
  },
  methods: {
    setNodeInfo(tree) {
      // 参考D3API
      const data = D3.hierarchy(tree);
      // 使用D3 Tree自动布局, nodeSize控制节点x方向和y方向上的距离
      const treeGenerator = D3.tree().nodeSize([200, 180]);
      const treeData = treeGenerator(data);
      // 获取自动布局后的节点信息
      const nodes = treeData.descendants();
      // 获取父子关系列表
      const links = treeData.links();
      // 设置节点位置信息
      this.nodeList = nodes.map((item) => {
        return {
          id: item.data.id,
          name: item.data.name,
          left: item.x + 900 + "px", // 900为初始X方向起点位置，默认为0
          top: item.y + "px",
        };
      });

      this.lineList = links.map((item) => {
        return {
          source: `node-${item.source.data.id}`,
          target: `node-${item.target.data.id}`,
          overlays: [["Arrow", { width: 10, length: 10, location: 0.5 }]],
        };
      });
    },
    drawLines() {
      this.$nextTick().then(() => {
        jsPlumb.ready(() => {
          this.jsPlumbInstance = jsPlumb.getInstance();

          this.jsPlumbInstance.importDefaults(this.jsPlumbSetting);

          this.lineList.forEach((item) => {
            this.jsPlumbInstance.connect(item, this.jsPlumbConnectOptions);
          });

          this.jsPlumbInstance.repaintEverything(); // 重绘
        });
      });
    },
  },
  mounted() {
    this.setNodeInfo(this.dataList);
    this.drawLines();
    window.console.log(this.nodeList);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#relation-box {
  position: relative;
}

.node {
  position: absolute;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px 30px;
}
</style>

