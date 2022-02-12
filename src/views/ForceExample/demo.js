/*
 * @Author: your name
 * @Date: 2022-02-13 00:33:21
 * @LastEditTime: 2022-02-13 00:33:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /d3-tree-example/src/views/ForceExample/demo.js
 */
var link = svg
  .append('g')
  .selectAll('.link')
  .data(links)
  .enter()
  // .append("line")
  .append('polyline')
  .attr('class', 'link')
  .style('stroke-width', '1')
  .style('stroke', 'black')
  .style('fill', 'none')
  .attr('id', function (d, i) {
    return 'link' + i
  })

var markerFor = svg
  .append('defs')
  .selectAll('marker')
  .data(['forward'])
  .enter()
  .append('marker')
  .attr('id', 'dirArrowFor')
  .attr('viewBox', '0 -5 10 10')
  .attr('markerUnits', 'strokeWidth')
  .attr('markerWidth', 10)
  .attr('markerHeight', 10)
  .attr('refX', 10)
  .attr('refY', 0)
  .attr('overflow', 'visible')
  .attr('orient', 'auto')
  .append('path')
  .attr('d', 'M0,-5L10,0L0,5')
  .style('fill', '#000000')

link.attr('marker-mid', checkDir)

var linkNode = svg
  .append('g')
  .selectAll('.link')
  .data(links)
  .enter()
  .append('circle')
  .attr('class', 'link-node')
  .attr('r', 4)
  .style('fill', '#c00')

linkNode.append('title').text(function (d) {
  return d.linkingWord
})

var node = svg
  .append('g')
  .selectAll('.node')
  .data(nodes)
  .enter()
  .append('rect')
  .attr('class', 'node')
  .attr('width', conceptWidth)
  .attr('height', conceptHeight)
  .attr('rx', 20)
  .attr('ry', 20)
  .style('fill', function (d) {
    return d.color
  })
  .call(
    d3.drag().on('start', dragStarted).on('drag', dragged).on('end', dragEnded)
  )

var labels = svg
  .append('g')
  .selectAll('.labels')
  .data(nodes)
  .enter()
  .append('text')
  .attr('class', 'labels')
  .text(function (d) {
    return d.name
  })
  .style('text-anchor', 'middle')
  .attr('dy', 5)

var force = d3
  .forceSimulation()
  .force('collision', d3.forceCollide(conceptWidthHalf + 1).iterations(1))
  .force(
    'link',
    d3.forceLink().id(function (d) {
      return d.name
    })
  )
  .on('tick', tick)

force.nodes(nodes)
force.force('link').links(links)

function interForwRev(d) {
  var interForw = pointOnRect(
    d.source.x,
    d.source.y,
    d.target.x - conceptWidthHalf,
    d.target.y - conceptHeightHalf,
    d.target.x + conceptWidthHalf,
    d.target.y + conceptHeightHalf
  )

  var interRev = pointOnRect(
    d.target.x,
    d.target.y,
    d.source.x - conceptWidthHalf,
    d.source.y - conceptHeightHalf,
    d.source.x + conceptWidthHalf,
    d.source.y + conceptHeightHalf
  )
  return [interForw, interRev]
}

function tick() {
  node
    .attr('x', function (d) {
      d.x = boundX(d.x)
      return d.x - conceptWidthHalf
    })
    .attr('y', function (d) {
      d.y = boundY(d.y)
      return d.y - conceptHeightHalf
    })

  labels
    .attr('x', function (d) {
      return d.x
    })
    .attr('y', function (d) {
      return d.y
    })

  linkNode
    .attr('cx', function (d) {
      var interFR = interForwRev(d)
      var interForw = interFR[0]
      var interRev = interFR[1]

      return (d.cx = (interForw.x + interRev.x) * 0.5)
    })
    .attr('cy', function (d) {
      var interFR = interForwRev(d)
      var interForw = interFR[0]
      var interRev = interFR[1]

      return (d.cy = (interForw.y + interRev.y) * 0.5)
    })

  // update the links after the nodes so we are already bounded by the box
  link.attr('points', function (d) {
    var interFR = interForwRev(d)
    var interForw = interFR[0]
    var interRev = interFR[1]

    if (d.direction === 'forward') {
      return `${d.source.x} ${d.source.y},${interForw.x} ${interForw.y},${d.target.x} ${d.target.y}`
    }
  })
}

function boundX(x) {
  return Math.max(
    conceptWidthHalf + padding,
    Math.min(width - (conceptWidthHalf + padding), x)
  )
}

function boundY(y) {
  return Math.max(
    conceptHeightHalf + padding,
    Math.min(height - (conceptHeightHalf + padding), y)
  )
}

// NO other bound function needed

function dragStarted(d) {
  if (!d3.event.active) force.alphaTarget(0.03).restart()

  d.fx = d.x
  d.fy = d.y
}
