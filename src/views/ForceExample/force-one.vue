<!--
 * @Author: your name
 * @Date: 2022-02-10 23:35:53
 * @LastEditTime: 2022-02-10 23:39:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /d3-tree-example/src/views/ForceExample/force-one.vue
-->
<template>
  <div class="container" style="cursor: pointer">
    <svg ref="svg" :width="width" :height="height">
      <g>
        <line
          v-for="(link, i) in links"
          :key="i"
          :x1="link.x1"
          :x2="link.x2"
          :y1="link.y1"
          :y2="link.y2"
          style="stroke: red"
        ></line>
      </g>
      <g
        class="node"
        style="fill: blue; cursor: pointer"
        :key="node.id"
        v-for="node in nodes"
      >
        <circle :cx="node.x" :cy="node.y" r="20"></circle>
        <text
          :x="node.x"
          :y="node.y"
          dx="0"
          dy="5"
          fill="white"
          text-anchor="middle"
        >
          {{ node.name }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "demo",
  data() {
    return {
      width: 600,
      height: 400,
      nodes: [
        { id: 1, name: "福州" },
        { id: 2, name: "宁德" },
        { id: 3, name: "莆田" },
        { id: 4, name: "泉州" },
        { id: 5, name: "厦门" },
        { id: 6, name: "漳州" },
      ],
      links: [
        { source: 1, target: 2 },
        { source: 2, target: 1 },
        { source: 1, target: 3 },
        { source: 1, target: 4 },
        { source: 3, target: 4 },
        { source: 4, target: 5 },
        { source: 4, target: 6 },
        { source: 5, target: 6 },
      ],
      simulation: "",
    };
  },
  mounted() {
    this.simulation = d3
      .forceSimulation(this.nodes)
      .force("charge", d3.forceManyBody().strength(-100))
      .force(
        "link",
        d3
          .forceLink(this.links)
          .id((d) => d.id)
          .distance(50)
      )
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
      .on("tick", () => {
        this.nodes = this.nodes.map((v) => v);
        this.links = this.links.map((v) => ({
          ...v,
          x1: v.source.x,
          y1: v.source.y,
          x2: v.target.x,
          y2: v.target.y,
        }));
      });
  },
};
</script>
