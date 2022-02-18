<!--
 * @Author: your name
 * @Date: 2022-02-10 23:47:55
 * @LastEditTime: 2022-02-18 12:02:59
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /d3-tree-example/src/views/ForceExample/force-two.vue
-->
<template>
  <!--功能 1、d3力导向图-->
  <!--坑   1、d3之v6版d3.event事件已取消，改为在回调中作为参数 2、attr只能分开写，不能合并写，合并写不能渲染出属性 3、图形/text颜色用fill、line颜色用stroke-->
  <!--4、由于层级，先绘制线再节点  5、画布中的offsetX貌似是相对于svg 6、连线用path的一个原因是textpath元素href指向指定的path-->
  <!--5、父元素穿透：pointer-events:none 6、设置svg中的样式：加/deep/或者去掉scope 7、动态新增节点/箭头 8、自定义右击事件-->
  <div class="force-page"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "force-3",
  data() {
    return {
      point: null,
      nodesData: null,
      linksData: null,
      nodes: null,
      texts: null,
      linksText: null,
      links: null,
      simulation: null,
    };
  },
  mounted() {
    this.drawForce();
  },
  methods: {
    drawForce() {
      //数据
      let nodesData = [
        { name: "桂林", id: 0 },
        { name: "广州", id: 1 },
        { name: "厦门", id: 2 },
        { name: "杭州", id: 3 },
        { name: "上海", id: 4 },
        { name: "青岛", id: 5 },
        { name: "天津", id: 6 },
      ];
      this.nodesData = nodesData;

      let linksData = [
        { source: 0, target: 1, relationship: "直达1", linkNum: 1 },
        { source: 1, target: 0, relationship: "直达2", linkNum: 2 },
        { source: 0, target: 2, relationship: "直达3", linkNum: 0 },
        { source: 0, target: 3, relationship: "直达4", linkNum: 0 },
        { source: 1, target: 4, relationship: "直达5", linkNum: 0 },
        { source: 1, target: 5, relationship: "直达6", linkNum: 1 },
        { source: 5, target: 1, relationship: "直达61", linkNum: 2 },
        { source: 1, target: 6, relationship: "直达7", linkNum: 0 },
      ];
      this.linksData = linksData;

      //开始布局画图
      const width = 800;
      const height = 600;

      //初始化力学仿真器
      let simulation = d3
        .forceSimulation(nodesData) //使用指定的nodes创建一个新的没有任何力模型的仿真
        .force(
          "link",
          d3
            .forceLink(linksData)
            .id((d) => d.id)
            .distance(100)
        ) // 弹簧力，为仿真添加指定name的力模型并返回仿真
        .force("charge", d3.forceManyBody().strength(-2000)) //电荷力/万有引力/多体力
        .force("center", d3.forceCenter(width / 2, height / 2)) //向心力
        .on("tick", this.ticked.bind(this));
      this.simulation = simulation;

      //定义一个序数颜色比例尺
      var color = d3.scaleOrdinal(d3.schemeCategory10);

      //添加svg标签
      // 1、attr只能分开写，不能合并写，合并写不能渲染出属性
      let svg = d3
        .select(".force-page")
        .append("svg")
        .attr("id", "chart")
        .attr("width", width)
        .attr("height", height)
        .call(this.zoom());

      // 添加group
      let gWapper = svg
        .append("g")
        .attr("class", "gWapper")
        .attr("cursor", "pointer");

      // 绘制连线
      let links = gWapper
        .append("g")
        .selectAll("path")
        .data(linksData)
        .enter()
        .append("path")
        .attr("id", function (d, i) {
          return (
            "force-page" + ";" + d.source.name + ";" + d.target.name + ";" + i
          );
        })
        .attr("marker-end", "url(#arrow)")
        .attr("stroke", function (d, i) {
          return "black";
        })
        .attr("stroke-width", 1)
        .attr("fill-opacity", 0);
      this.links = links;

      // 绘制箭头
      let arrow = gWapper
        .append("defs")
        .append("marker")
        .attr("id", "arrow")
        .attr("markerWidth", 8)
        .attr("markerHeight", 8)
        .attr("refX", 8)
        .attr("refY", 8)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", "red")
        .attr("d", "M0 0 L8 8 L0 16Z");

      // 绘制节点
      let nodes = gWapper
        .append("g")
        .selectAll("circle")
        .data(nodesData)
        .enter()
        .append("circle")
        .attr("r", 30)
        .attr("opacity", 0.5)
        .attr("fill", (d, i) => {
          return color(i);
        })
        .call(
          d3
            .drag()
            .on("start", dragstart)
            .on("drag", dragged)
            .on("end", dragend)
        );
      this.nodes = nodes;

      // 边上的文字
      let linksText = gWapper
        .append("g")
        .selectAll("text")
        .data(linksData)
        .enter()
        .append("text")
        .attr("dy", "5")
        .append("textPath")
        .attr("startOffset", "30%")
        // .attr("text-anchor","center")
        .attr("xlink:href", function (d, i) {
          return (
            "#" +
            "force-page" +
            ";" +
            d.source.name +
            ";" +
            d.target.name +
            ";" +
            i
          );
        })
        .text(function (d) {
          return d.relationship;
        })
        .attr("id", function (d, i) {
          return "force-page" + ";" + d.relationship + ";" + i;
        });

      this.linksText = linksText;

      // 绘制文字
      let texts = gWapper
        .append("g")
        .selectAll("text")
        .data(nodesData)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("pointer-event", "none")
        .text((d) => d.name);

      this.texts = texts;

      function dragstart(event, d) {
        console.info("kkk");
        if (!event.active) {
          simulation.alphaTarget(0.3).restart();
        }
        d.fx = d.x;
        d.fy = d.y;
      }

      function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragend(event, d) {
        if (!event.active) {
          simulation.alphaTarget(0);
        }
        d.fx = null;
        d.fy = null;
      }
    },

    ticked() {
      //虽然仿真系统会更新节点的位置(只是设置了nodes对象的x y属性)，但是它不会转为svg内部元素的坐标表示，这需要我们自己来操作
      this.links.attr("d", function (d) {
        // 计算偏移量
        var tempX =
          (d.source.x - d.target.x) /
          Math.sqrt(
            Math.pow(d.source.x - d.target.x, 2) +
              Math.pow(d.source.y - d.target.y, 2)
          );
        var tempY =
          (d.source.y - d.target.y) /
          Math.sqrt(
            Math.pow(d.source.x - d.target.x, 2) +
              Math.pow(d.source.y - d.target.y, 2)
          );
        if (!tempX && !tempY) {
          return "";
        }
        d.path = [];
        d.path[0] = d.source.x - tempX * 30;
        d.path[1] = d.source.y - tempY * 30;
        d.path[2] = d.target.x + tempX * 30;
        d.path[3] = d.target.y + tempY * 30;
        var dr = 175 / d.linkNum; // linkNum is defined above
        if (d.linkNum === 0) {
          return `M ${d.path[0]},${d.path[1]} L ${d.path[2]},${d.path[3]}`;
        }
        return (
          "M" +
          d.path[0] +
          "," +
          d.path[1] +
          "A" +
          dr +
          "," +
          dr +
          " 0 0,1 " +
          d.path[2] +
          "," +
          d.path[3]
        );
      });

      this.nodes
        .attr("cx", (d) => {
          return d.x;
        })
        .attr("cy", (d) => d.y);

      this.linksText
        .attr("x", function (d) {
          return (d.source.x + d.target.x) / 2;
        })
        .attr("y", function (d) {
          return (d.source.y + d.target.y) / 2;
        });

      this.texts.attr("x", (d) => d.x).attr("y", (d) => d.y);
      if (this.simulation.alpha() < 0.2) {
        this.nodes
          .attr("cx", (d) => {
            d.fx = d.x;
            return d.x;
          })
          .attr("cy", (d) => {
            d.fy = d.y;
            return d.y;
          });
        this.simulation.stop();
      }
    },

    drag(simulation) {
      return d3
        .drag()
        .on("start", dragstart)
        .on("drag", dragged)
        .on("end", dragend);
    },

    zoom() {
      //定义缩放函数
      var zoom = d3
        .zoom()
        .scaleExtent([1 / 10, 10]) // 用于设置最小和最大的缩放比例
        .on("zoom", zoomed);

      function zoomed(event) {
        d3.select(".gWapper").attr("transform", event.transform);
      }

      return zoom;
    },
  },
};
</script>

<style lang="less" scoped>
.force-page {
  width: 100%;
  height: 100%;
  position: relative;

  .force-tip {
    line-height: 20px;
    width: 100px;
    position: absolute;
    color: #fff;

    li {
      background: cadetblue;
      cursor: pointer;
    }
  }
}
</style>
