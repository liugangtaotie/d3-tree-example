<template>
  <div class="d3Chart"></div>
</template>
<script>
import * as d3 from "d3";

export default {
  mounted() {
    // 源数据
    let data = {
      name: "中国",
      children: [
        {
          name: "浙江",
          children: [
            { name: "杭州" },
            { name: "宁波" },
            { name: "温州" },
            { name: "绍兴" },
          ],
        },
        {
          name: "广西",
          children: [
            {
              name: "桂林",
              children: [
                { name: "秀峰区" },
                { name: "叠彩区" },
                { name: "象山区" },
                { name: "七星区" },
              ],
            },
            { name: "南宁" },
            { name: "柳州" },
            { name: "防城港" },
          ],
        },
        {
          name: "黑龙江",
          children: [
            { name: "哈尔滨" },
            { name: "齐齐哈尔" },
            { name: "牡丹江" },
            { name: "大庆" },
          ],
        },
        {
          name: "新疆",
          children: [
            { name: "乌鲁木齐" },
            { name: "克拉玛依" },
            { name: "吐鲁番" },
            { name: "哈密" },
          ],
        },
      ],
    };

    // 画布的参数
    let mapWidth = 600;
    let mapHeight = 600;
    let mapPadding = 20;

    // 定义画布—— 外边距 10px
    let svgMap = d3
      .select(".d3Chart")
      .append("svg")
      .attr("width", mapWidth)
      .attr("height", mapHeight)
      .style("margin", "10px");

    // 定义树状图画布
    let treeMap = svgMap
      .append("g")
      .attr("transform", "translate(" + mapPadding + "," + mapPadding + ")");

    // 将源数据转换为可以生成树状图的数据(有节点 nodes 和连线 links )
    let treeData = d3
      .tree()
      // 设置树状图的尺寸
      .size([mapWidth - 3 * mapPadding, mapHeight - 6 * mapPadding])
      // 设置树状图节点之间的间隔
      .separation(function (a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
      })(
      // 创建层级布局，对源数据进行数据转换
      d3.hierarchy(data).sum(function (d) {
        return d.value;
      })
    );

    // 贝塞尔曲线生成器
    let Bézier_curve_generator = d3
      .linkHorizontal()
      .x(function (d) {
        return d.y;
      })
      .y(function (d) {
        return d.x;
      });

    // 绘制边
    treeMap
      .selectAll("path")
      // 节点的关系 links
      .data(treeData.links())
      .enter()
      .append("path")
      .attr("d", function (d) {
        // 根据name值的长度调整连线的起点
        var start = {
          x: d.source.x,
          y: d.source.y + d.source.data.name.length * 16 + 12,
        };
        var end = { x: d.target.x, y: d.target.y };
        return Bézier_curve_generator({ source: start, target: end });
      })
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1);

    // 创建分组——节点+文字
    let groups = treeMap
      .selectAll("g")
      // 节点 nodes
      .data(treeData.descendants())
      .enter()
      .append("g")
      .attr("transform", function (d) {
        var cx = d.x;
        var cy = d.y;
        return "translate(" + cy + "," + cx + ")";
      });

    // 绘制节点
    groups
      .append("circle")
      .attr("r", 2)
      .attr("fill", "white")
      .attr("stroke", "red")
      .attr("stroke-width", 1);

    // 绘制文字
    groups
      .append("text")
      .attr("x", function (d) {
        return 8;
      })
      .attr("y", -5)
      .attr("dy", 10)
      .text(function (d) {
        return d.data.name;
      });
  },
};
</script>
<style scoped>
</style>

