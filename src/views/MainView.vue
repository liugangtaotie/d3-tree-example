

<template>
  <div class="tree">
    <svg id="tree" :width="util.width" :height="util.height">
      <g class="gIndex" :transform="zoomIdentity">
        <g v-for="(item, index) in links" :key="index + 'a'" class="gedges">
          <path class="edges" :d="item.path"></path>
          <g
            :transform="`translate(${item.target.x + util.nodeW / 2},${
              item.target.y - 30
            })`"
          >
            <foreignObject width="70" height="20" x="-35">
              <div class="text" @click="addChildren(item)">添加线索</div>
            </foreignObject>
          </g>
        </g>
        <g
          v-for="(item, index) in nodes"
          :key="index"
          class="gnode"
          :transform="`translate(${item.x},${item.y})`"
        >
          <rect class="node" :width="util.nodeW" :height="util.nodeH"></rect>
          <foreignObject :width="util.nodeW" :height="util.nodeH">
            <div class="text">{{ item.data.name }}</div>
          </foreignObject>
          <g
            v-if="item.children && item.children.length > 0"
            :transform="`translate(${util.nodeW / 2},${util.nodeH + 20})`"
          >
            <circle
              class="addCircle"
              cx="0"
              cy="0"
              r="10"
              @click="addChildren(item)"
            ></circle>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import { hierarchy as d3Hierarchy, tree as d3Tree } from "d3-hierarchy";
import { zoom as d3Zoom, zoomIdentity } from "d3-zoom";
import { select as d3Select, event as d3Event } from "d3-selection";

export default {
  name: "home",
  data() {
    return {
      util: { width: 900, height: 600, nodeW: 200, nodeH: 50 },
      zoomIdentity: zoomIdentity,
      treeData: {
        name: "pusa",
        children: [
          {
            name: "pusa1",
            children: [
              {
                name: "pusa2",
                children: [],
              },
            ],
          },
          {
            name: "pusa3",
            children: [
              {
                name: "pusa4",
                children: [],
              },
            ],
          },
        ],
      },
      nodes: [],
      links: [],
    };
  },

  mounted() {
    this.getInit();
    this.getInitZoom();
  },

  methods: {
    // 添加子节点
    addChildren(item) {
      item.data.children.push({ name: "如来" });
      this.getInit();
    },

    // 初始化节点
    getInit() {
      let hierarchyData = d3Hierarchy(this.treeData).sum((d) => d.value);
      let treeLayout = d3Tree().nodeSize([200, 150]);
      let treeDataTrue = treeLayout(hierarchyData);

      treeDataTrue.each((d) => {
        d.x = d.x + this.util.width / 2 - this.util.nodeW / 2;
      });

      this.nodes = treeDataTrue.descendants();
      this.links = treeDataTrue.links();

      this.links.map((item) => {
        if (item.source.x === item.target.x) {
          item.path = `M${item.source.x + this.util.nodeW / 2} ${
            item.source.y + this.util.nodeH
          }
        L${item.target.x + this.util.nodeW / 2} ${item.target.y}`;
        } else {
          item.path = `M${item.source.x + this.util.nodeW / 2} ${
            item.source.y + this.util.nodeH
          }
        L${item.source.x + this.util.nodeW / 2} ${
            item.source.y + this.util.nodeH + 50
          }
        L${item.target.x + this.util.nodeW / 2} ${item.target.y - 50}
        L${item.target.x + this.util.nodeW / 2} ${item.target.y}`;
        }
      });
    },

    // 初始化节点zoom
    getInitZoom() {
      let svg = d3Select("#tree");
      let zoom = d3Zoom()
        .scaleExtent([0.5, 2])
        .on("zoom", function () {
          svg.select(".gIndex").attr("transform", d3Event.transform);
        });

      svg.call(zoom).on("dblclick.zoom", null);
    },
  },
};
</script>

<style  scoped>
.tree {
  width: 1000px;
}

.node {
  stroke: blue;
  stroke-width: 1px;
  fill: none;
}

.edges {
  stroke: blue;
  stroke-width: 1px;
  fill: none;
}

.addCircle {
  stroke: blue;
  stroke-width: 1px;
  fill: none;
  cursor: pointer;
}

.text {
  cursor: pointer;
}

.tree-content {
  height: 100%;
}
</style>

