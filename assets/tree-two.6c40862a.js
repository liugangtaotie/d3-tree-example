import{s as d,t as p,k as _,a as h}from"./vendor.a3bf09b0.js";import{n as v}from"./index.35d24c55.js";var f=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"d3Chart"})},g=[];const x={mounted(){let a={name:"\u4E2D\u56FD",children:[{name:"\u6D59\u6C5F",children:[{name:"\u676D\u5DDE"},{name:"\u5B81\u6CE2"},{name:"\u6E29\u5DDE"},{name:"\u7ECD\u5174"}]},{name:"\u5E7F\u897F",children:[{name:"\u6842\u6797",children:[{name:"\u79C0\u5CF0\u533A"},{name:"\u53E0\u5F69\u533A"},{name:"\u8C61\u5C71\u533A"},{name:"\u4E03\u661F\u533A"}]},{name:"\u5357\u5B81"},{name:"\u67F3\u5DDE"},{name:"\u9632\u57CE\u6E2F"}]},{name:"\u9ED1\u9F99\u6C5F",children:[{name:"\u54C8\u5C14\u6EE8"},{name:"\u9F50\u9F50\u54C8\u5C14"},{name:"\u7261\u4E39\u6C5F"},{name:"\u5927\u5E86"}]},{name:"\u65B0\u7586",children:[{name:"\u4E4C\u9C81\u6728\u9F50"},{name:"\u514B\u62C9\u739B\u4F9D"},{name:"\u5410\u9C81\u756A"},{name:"\u54C8\u5BC6"}]}]},t=600,r=600,s=20,i=d(".d3Chart").append("svg").attr("width",t).attr("height",r).style("margin","10px").append("g").attr("transform","translate("+s+","+s+")"),o=p().size([t-3*s,r-6*s]).separation(function(e,n){return(e.parent==n.parent?1:2)/e.depth})(_(a).sum(function(e){return e.value})),u=h().x(function(e){return e.y}).y(function(e){return e.x});i.selectAll("path").data(o.links()).enter().append("path").attr("d",function(e){var n={x:e.source.x,y:e.source.y+e.source.data.name.length*16+12},l={x:e.target.x,y:e.target.y};return u({source:n,target:l})}).attr("fill","none").attr("stroke","blue").attr("stroke-width",1);let c=i.selectAll("g").data(o.descendants()).enter().append("g").attr("transform",function(e){var n=e.x,l=e.y;return"translate("+l+","+n+")"});c.append("circle").attr("r",2).attr("fill","white").attr("stroke","red").attr("stroke-width",1),c.append("text").attr("x",function(e){return 8}).attr("y",-5).attr("dy",10).text(function(e){return e.data.name})}},m={};var y=v(x,f,g,!1,k,"67a79a1c",null,null);function k(a){for(let t in m)this[t]=m[t]}var M=function(){return y.exports}();export{M as default};
