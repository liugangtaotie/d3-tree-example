/*
 * @Author: your name
 * @Date: 2022-02-24 23:27:51
 * @LastEditTime: 2022-02-25 10:37:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /d3-tree-example/src/views/D3-cloud/myCloud.js
 */
// myCloud.js

import * as d3 from 'd3'
import cloud from './cloud.js'

console.info('1111', cloud)
// var d3 = require('d3'),
// cloud = require('./cloud.js').default

export default function (option, callback) {
  //传入的option参数对象和回调函数
  let theSize = option.size,
    theWordList = option.wordList,
    theSvgElement = option.svgElement
  console.info('theSvgElement', theSvgElement)

  var layout = cloud()
    .size(theSize)
    .words(theWordList)
    .padding(5)
    //配置随机旋转的角度
    .rotate(function () {
      return ~~(Math.random() * 3) * 30
    })
    .font('Impact')
    .fontSize(function (d) {
      return d.size
    })
    .on('end', draw)

  layout.start()

  function draw(words) {
    let color = d3.scaleOrdinal(d3.schemePaired)
    // let color = d3.scaleOrdinal(d3.schemeCategory10);
    // 注意点: 如果使用的是 d3.schemeCategory20 会报错,可能是最新的d3删除了这个属性;可以去d3官方文档查看下;
    d3.select(theSvgElement)
      .append('svg')
      .attr('width', layout.size()[0])
      .attr('height', layout.size()[1])
      .append('g')
      .attr(
        'transform',
        'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')'
      )
      .selectAll('text')
      .data(words)
      .enter()
      .append('text')
      .style('font-size', function (d) {
        return d.size + 'px'
      })
      .style('font-family', 'Impact')
      .style('cursor', 'pointer')
      .style('fill', function (d, i) {
        return color(i)
      })
      .attr('text-anchor', 'middle')
      .attr('transform', function (d) {
        return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'
      })
      .text(function (d) {
        return d.text
      })
      // 添加点击的回调方法
      .on('click', function (d) {
        callback(d.target.textContent)
      })
  }
}
