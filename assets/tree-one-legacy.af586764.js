!function(){var e=document.createElement("style");e.innerHTML=".container[data-v-1b83dd70]{display:flex;flex-direction:column;align-items:center}.tree-node[data-v-1b83dd70]{display:inline-block;width:28px;height:28px;border-radius:50%;background-color:#faebd7;text-align:center;line-height:28px}.rich-media-node[data-v-1b83dd70]{width:80px;padding:8px;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;color:#fff;background-color:#f7c616;border-radius:4px}h3[data-v-1b83dd70]{margin-top:32px;margin-bottom:16px}.changeDataset[data-v-1b83dd70]{font-size:1rem;font-weight:200;letter-spacing:1px;padding:10px 45px;outline:0;border:1px solid black;cursor:pointer;margin:1rem;position:relative;background-color:#2196f3;color:#f5f5f5}\n",document.head.appendChild(e),System.register(["./index-legacy.20ddac3c.js","./vendor-legacy.ed7aa6ac.js"],(function(e){"use strict";var t,a;return{setters:[function(e){t=e._,a=e.n},function(){}],execute:function(){var i={},r=a({name:"VueTreeExample",data:function(){return{sampleData:{value:"1",children:[{value:"2",children:[{value:"4"},{value:"5"}]},{value:"3"}]},richMediaData:{name:"James",value:800,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",children:[{name:"Bob",value:400,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",children:[{name:"C1",value:100,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"},{name:"C2",value:300,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"},{name:"C3",value:200,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"}]},{name:"Smith",value:200,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",children:[{name:"S1",value:230,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"}]},{name:"Jackson",value:300,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"}]},vehicles:{name:"Wheels",children:[{name:"Wings",children:[{name:"Plane"}]},{name:"Piston",customID:3},{name:"Carburetor",children:[{name:"Truck",customID:2},{name:"Car",customID:2}]},{name:"Valve",customID:4},{name:"Crankshaft",customID:1}],links:[{parent:1,child:2},{parent:3,child:2},{parent:4,child:2}],identifier:"customID"},clicked:!1,multiRoot1:[{name:"Wheels",children:[{name:"Wings",children:[{name:"Plane"}]}]},{name:"Wings",children:[{name:"Plane"}]}],multiRoot2:{name:"Carburetor",children:[{name:"Truck",customID:2},{name:"Car",customID:2}]},treeConfig:{nodeWidth:120,nodeHeight:80,levelHeight:200}}},computed:{multiRootChoice:function(){return this.clicked?this.multiRoot2:this.multiRoot1}},methods:{controlScale:function(e){switch(e){case"bigger":this.$refs.scaleTree.zoomIn();break;case"smaller":this.$refs.scaleTree.zoomOut();break;case"restore":this.$refs.scaleTree.restoreScale()}}}},(function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"container"},[i("h3",[e._v("Basic usage | 基本使用")]),i(t,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.sampleData,config:e.treeConfig}}),i("h3",[e._v("Show different style with folded nodes | 异化展示折叠节点")]),i(t,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.sampleData,config:e.treeConfig},scopedSlots:e._u([{key:"node",fn:function(t){var a=t.node,r=t.collapsed;return[i("span",{staticClass:"tree-node",style:{border:r?"2px solid grey":""}},[e._v(e._s(a.value))])]}}])}),i("h3",[e._v("Rich media tree chart | 富媒体树状图")]),i(t,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig},scopedSlots:e._u([{key:"node",fn:function(t){var a=t.node,r=t.collapsed;return[i("div",{staticClass:"rich-media-node",style:{border:r?"2px solid grey":""}},[i("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:a.avatar}}),i("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("能力值"+e._s(a.value))])])]}}])}),i("h3",[e._v("Link nodes with straight line | 直线连接")]),i(t,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig,linkStyle:"straight"},scopedSlots:e._u([{key:"node",fn:function(t){var a=t.node,r=t.collapsed;return[i("div",{staticClass:"rich-media-node",style:{border:r?"2px solid grey":""}},[i("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:a.avatar}}),i("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("能力值"+e._s(a.value))])])]}}])}),i("h3",[e._v("Horizontal tree chart | 横向树状图")]),i(t,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig,direction:"horizontal"},scopedSlots:e._u([{key:"node",fn:function(t){var a=t.node,r=t.collapsed;return[i("div",{staticClass:"rich-media-node",style:{border:r?"2px solid grey":""}},[i("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:a.avatar}}),i("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("能力值"+e._s(a.value))])])]}}])}),i("h3",[e._v("Zoom in or out | 缩放")]),i("div",{staticClass:"mb20",staticStyle:{display:"flex"}},[i("el-button",{on:{click:function(t){return e.controlScale("bigger")}}},[e._v("+")]),i("el-button",{on:{click:function(t){return e.controlScale("smaller")}}},[e._v("-")]),i("el-button",{on:{click:function(t){return e.controlScale("restore")}}},[e._v("1:1")])],1),i(t,{ref:"scaleTree",staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig},scopedSlots:e._u([{key:"node",fn:function(t){var a=t.node,r=t.collapsed;return[i("div",{staticClass:"rich-media-node",style:{border:r?"2px solid grey":""}},[i("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:a.avatar}}),i("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("能力值"+e._s(a.value))])])]}}])}),i("h3",[e._v(" Example of multiple parents with node collapse disabled | 支持多父节点(禁用折叠) ")]),i(t,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.vehicles,config:e.treeConfig,"collapse-enabled":!1,linkStyle:"straight"},scopedSlots:e._u([{key:"node",fn:function(t){var a=t.node,r=t.collapsed;return[i("div",{staticClass:"rich-media-node",style:{border:r?"2px solid grey":""}},[i("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("能力值 "+e._s(a.name))])])]}}])}),i("h3",[e._v(" Example of multi-root with changing dataset | 多根节点, 支持切换数据源 ")]),i("el-button",{staticClass:"changeDataset",attrs:{type:"primary"},on:{click:function(t){e.clicked=!e.clicked}}},[e._v(" Change dataset ")]),i(t,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.multiRootChoice,config:e.treeConfig,"collapse-enabled":!0,linkStyle:"straight"},scopedSlots:e._u([{key:"node",fn:function(t){var a=t.node,r=t.collapsed;return[i("div",{staticClass:"rich-media-node",style:{border:r?"2px solid grey":""}},[i("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("能力值 "+e._s(a.name))])])]}}])})],1)}),[],!1,n,"1b83dd70",null,null);function n(e){for(var t in i)this[t]=i[t]}e("default",function(){return r.exports}())}}}))}();
