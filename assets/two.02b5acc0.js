import{j as s}from"./jsplumb.32de44ea.js";import{k as l,t as c}from"./vendor.a3bf09b0.js";import{n as h}from"./index.35d24c55.js";var u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",{staticStyle:{"text-align":"center",padding:"50px"}},[t._v(" JsPlumb + D3js\u5B9E\u73B0\u81EA\u5B9A\u4E49\u8282\u70B9\uFF0C\u53EF\u62D6\u62FD\u8282\u70B9,\u81EA\u52A8\u6811\u72B6\u5E03\u5C40 ")]),i("div",{attrs:{id:"relation-box"}},t._l(t.nodeList,function(n){return i("div",{key:n.id,staticClass:"node",style:{left:n.left,top:n.top},attrs:{id:"node-"+n.id}},[t._v(" "+t._s(n.name)+" "),i("div",[t._v("detail...")])])}),0)])},m=[];const p={name:"landing-page",data(){return{jsPlumbInstance:"",jsPlumbSetting:{Anchors:["Top","TopCenter","TopRight","TopLeft","Right","RightMiddle","Bottom","BottomCenter","BottomRight","BottomLeft","Left","LeftMiddle"],Connector:["Bezier",{curviness:60}],ConnectionsDetachable:!1,DeleteEndpointsOnDetach:!1,Endpoints:[["Dot",{radius:2}],["Dot",{radius:2}]],EndpointStyle:{fill:"skyblue",outlineWidth:1},PaintStyle:{stroke:"#000000",strokeWidth:1,outlineStroke:"transparent",outlineWidth:10},Overlays:[["Arrow",{width:10,length:8,location:1,direction:1,foldback:.623}]],RenderMode:"svg",DragOptions:{cursor:"pointer",zIndex:2e3},HoverPaintStyle:{stroke:"skyblue",strokeWidth:3,cursor:"pointer"}},jsPlumbConnectOptions:{isSource:!0,isTarget:!0,anchor:"Continuous",overlays:[["Arrow",{width:8,length:8,location:1}]]},commonLink:{isSource:!0,isTarget:!0,anchor:["Perimeter",{shape:"Circle"}],connector:["Bezier"],endpoint:"Dot",maxConnections:-1},dataList:{id:1,name:"\u4E2D\u56FD",children:[{id:2,name:"\u5317\u4EAC",children:[{id:6,name:"\u6D77\u6DC0\u533A"},{id:7,name:"\u9AD8\u65B0\u533A"}]},{id:3,name:"\u8D35\u5DDE",children:[{id:4,name:"\u8D35\u9633"},{id:5,name:"\u9ED4\u897F\u5357"},{id:8,name:"\u9ED4\u4E1C\u5357"}]}]},nodeList:[],lineList:[]}},mounted(){this.setNodeInfo(this.dataList),this.drawLines()},methods:{setNodeInfo(t){const e=l(t),n=c().nodeSize([200,180])(e),a=n.descendants(),d=n.links();this.nodeList=a.map(o=>({id:o.data.id,name:o.data.name,left:o.x+900+"px",top:o.y+"px"})),this.lineList=d.map(o=>({source:`node-${o.source.data.id}`,target:`node-${o.target.data.id}`,overlays:[["Arrow",{width:10,length:10,location:.5}]]}))},drawLines(){this.$nextTick().then(()=>{s.jsPlumb.ready(()=>{this.jsPlumbInstance=s.jsPlumb.getInstance(),this.jsPlumbInstance.importDefaults(this.jsPlumbSetting),this.lineList.forEach(t=>{this.jsPlumbInstance.connect(t,this.jsPlumbConnectOptions)}),this.nodeList.forEach((t,e)=>{this.jsPlumbInstance.draggable("node-"+(e+1)),this.jsPlumbInstance.addEndpoint("node-"+(e+1),{anchor:["Bottom","Top","Left","Right"],Overlays:[["Arrow",{width:10,length:8,location:1,direction:1,foldback:.623}]]},this.commonLink)})}),this.jsPlumbInstance.repaintEverything()})}}},r={};var _=h(p,u,m,!1,f,"6b0c0d63",null,null);function f(t){for(let e in r)this[e]=r[e]}var y=function(){return _.exports}();export{y as default};
