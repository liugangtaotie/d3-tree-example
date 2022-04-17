import{_ as r,n as l}from"./index.35d24c55.js";import"./vendor.a3bf09b0.js";var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("h3",[e._v("Basic usage | \u57FA\u672C\u4F7F\u7528")]),t(r,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.sampleData,config:e.treeConfig}}),t("h3",[e._v("Show different style with folded nodes | \u5F02\u5316\u5C55\u793A\u6298\u53E0\u8282\u70B9")]),t(r,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.sampleData,config:e.treeConfig},scopedSlots:e._u([{key:"node",fn:function(a){var i=a.node,s=a.collapsed;return[t("span",{staticClass:"tree-node",style:{border:s?"2px solid grey":""}},[e._v(e._s(i.value))])]}}])}),t("h3",[e._v("Rich media tree chart | \u5BCC\u5A92\u4F53\u6811\u72B6\u56FE")]),t(r,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig},scopedSlots:e._u([{key:"node",fn:function(a){var i=a.node,s=a.collapsed;return[t("div",{staticClass:"rich-media-node",style:{border:s?"2px solid grey":""}},[t("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:i.avatar}}),t("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("\u80FD\u529B\u503C"+e._s(i.value))])])]}}])}),t("h3",[e._v("Link nodes with straight line | \u76F4\u7EBF\u8FDE\u63A5")]),t(r,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig,linkStyle:"straight"},scopedSlots:e._u([{key:"node",fn:function(a){var i=a.node,s=a.collapsed;return[t("div",{staticClass:"rich-media-node",style:{border:s?"2px solid grey":""}},[t("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:i.avatar}}),t("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("\u80FD\u529B\u503C"+e._s(i.value))])])]}}])}),t("h3",[e._v("Horizontal tree chart | \u6A2A\u5411\u6811\u72B6\u56FE")]),t(r,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig,direction:"horizontal"},scopedSlots:e._u([{key:"node",fn:function(a){var i=a.node,s=a.collapsed;return[t("div",{staticClass:"rich-media-node",style:{border:s?"2px solid grey":""}},[t("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:i.avatar}}),t("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("\u80FD\u529B\u503C"+e._s(i.value))])])]}}])}),t("h3",[e._v("Zoom in or out | \u7F29\u653E")]),t("div",{staticClass:"mb20",staticStyle:{display:"flex"}},[t("el-button",{on:{click:function(a){return e.controlScale("bigger")}}},[e._v("+")]),t("el-button",{on:{click:function(a){return e.controlScale("smaller")}}},[e._v("-")]),t("el-button",{on:{click:function(a){return e.controlScale("restore")}}},[e._v("1:1")])],1),t(r,{ref:"scaleTree",staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.richMediaData,config:e.treeConfig},scopedSlots:e._u([{key:"node",fn:function(a){var i=a.node,s=a.collapsed;return[t("div",{staticClass:"rich-media-node",style:{border:s?"2px solid grey":""}},[t("img",{staticStyle:{width:"48px",height:"48px","border-raduis":"4px"},attrs:{src:i.avatar}}),t("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("\u80FD\u529B\u503C"+e._s(i.value))])])]}}])}),t("h3",[e._v(" Example of multiple parents with node collapse disabled | \u652F\u6301\u591A\u7236\u8282\u70B9(\u7981\u7528\u6298\u53E0) ")]),t(r,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.vehicles,config:e.treeConfig,"collapse-enabled":!1,linkStyle:"straight"},scopedSlots:e._u([{key:"node",fn:function(a){var i=a.node,s=a.collapsed;return[t("div",{staticClass:"rich-media-node",style:{border:s?"2px solid grey":""}},[t("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("\u80FD\u529B\u503C "+e._s(i.name))])])]}}])}),t("h3",[e._v(" Example of multi-root with changing dataset | \u591A\u6839\u8282\u70B9, \u652F\u6301\u5207\u6362\u6570\u636E\u6E90 ")]),t("el-button",{staticClass:"changeDataset",attrs:{type:"primary"},on:{click:function(a){e.clicked=!e.clicked}}},[e._v(" Change dataset ")]),t(r,{staticStyle:{width:"800px",height:"600px",border:"1px solid gray"},attrs:{dataset:e.multiRootChoice,config:e.treeConfig,"collapse-enabled":!0,linkStyle:"straight"},scopedSlots:e._u([{key:"node",fn:function(a){var i=a.node,s=a.collapsed;return[t("div",{staticClass:"rich-media-node",style:{border:s?"2px solid grey":""}},[t("span",{staticStyle:{padding:"4px 0","font-weight":"bold"}},[e._v("\u80FD\u529B\u503C "+e._s(i.name))])])]}}])})],1)},c=[];const h={name:"VueTreeExample",data(){return{sampleData:{value:"1",children:[{value:"2",children:[{value:"4"},{value:"5"}]},{value:"3"}]},richMediaData:{name:"James",value:800,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",children:[{name:"Bob",value:400,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",children:[{name:"C1",value:100,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"},{name:"C2",value:300,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"},{name:"C3",value:200,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"}]},{name:"Smith",value:200,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg",children:[{name:"S1",value:230,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"}]},{name:"Jackson",value:300,avatar:"https://user-images.githubusercontent.com/22477383/147928532-2136501d-84b4-428a-8e40-e7ab61f61134.jpeg"}]},vehicles:{name:"Wheels",children:[{name:"Wings",children:[{name:"Plane"}]},{name:"Piston",customID:3},{name:"Carburetor",children:[{name:"Truck",customID:2},{name:"Car",customID:2}]},{name:"Valve",customID:4},{name:"Crankshaft",customID:1}],links:[{parent:1,child:2},{parent:3,child:2},{parent:4,child:2}],identifier:"customID"},clicked:!1,multiRoot1:[{name:"Wheels",children:[{name:"Wings",children:[{name:"Plane"}]}]},{name:"Wings",children:[{name:"Plane"}]}],multiRoot2:{name:"Carburetor",children:[{name:"Truck",customID:2},{name:"Car",customID:2}]},treeConfig:{nodeWidth:120,nodeHeight:80,levelHeight:200}}},computed:{multiRootChoice(){return this.clicked?this.multiRoot2:this.multiRoot1}},methods:{controlScale(e){switch(e){case"bigger":this.$refs.scaleTree.zoomIn();break;case"smaller":this.$refs.scaleTree.zoomOut();break;case"restore":this.$refs.scaleTree.restoreScale();break}}}},o={};var p=l(h,d,c,!1,u,"1b83dd70",null,null);function u(e){for(let n in o)this[n]=o[n]}var v=function(){return p.exports}();export{v as default};
