var marge = { top: 60, bottom: 60, left: 60, right: 60 }

//画柱形图
var dataset = ['苹果','香蕉','橘子','柠檬','葡萄'];
var datasetY = [30, 50, 90, 60, 20];
var svg = d3.select("svg");
var g = svg.append("g").attr("transform", "translate(" + marge.top + "," + marge.left + ")");
scale_z(dataset,datasetY,g)

var yScalereact = d3.scaleLinear()
    .domain([d3.max(datasetY),0])
    .range([0, 250]);
var rectHeight = 30;	
g.selectAll("rect")
    .data(datasetY)
    .enter()
    .append("rect")
    .attr('transform','translate(30,0)')
    .attr("x",function(d,i){
        return i*50;
    })
    .attr("y",function(d){
        return yScalereact(d)
    })
    .attr("width",rectHeight)
    .attr("height",function(d){
        return 250-yScalereact(d)
    })
    .attr("fill","#c35033");

//画折线
var dataset1 =[
    {x:0,y:30},{x:1,y:50},{x:2,y:90},{x:3,y:60},{x:4,y:20},
]
var dataset = ['苹果','香蕉','橘子','柠檬','葡萄'];
var datasetY = [30, 50, 90, 60, 20];
var svg = d3.select("svg");
var g = svg.append("g").attr("transform", "translate(" + marge.top + ",400)");
scale_z(dataset,datasetY,g)
var yScalereact = d3.scaleLinear()
    .domain([d3.max(datasetY),0])
    .range([0, 250]);
g.selectAll('.line')
    .data(dataset1)
    .enter()
    .append('line')
    .attr('style', 'stroke:red')
    .attr('curve', 'curve')
    .attr('transform', `translate(100,0)`)
    .attr('x1', (_, i) => {
      return (i-1)*50
    })
    .attr('y1', d => {
      return yScalereact(d.y)
    })
    .attr('x2', (_, i) => {
      return i + 1 < dataset.length
        ? (i)*50
        : (i-1)*50
    })
    .attr('y2', (_, i) => {
      return i + 1 < dataset.length ? yScalereact(datasetY[i + 1]) : yScalereact(datasetY[i]);
    });

//画散点图
var dataset = ['苹果','香蕉','橘子','柠檬','葡萄'];
var datasetY = [30, 50, 90, 60, 20];
var svg = d3.select("svg");
var g = svg.append("g").attr("transform", "translate(400," + marge.left + ")");
scale_z(dataset,datasetY,g)

var yScalereact = d3.scaleLinear()
    .domain([d3.max(datasetY),0])
    .range([0, 250]);
var rectHeight = 30;	
g.selectAll("circle")
    .data(datasetY)
    .enter()
    .append("circle")
    .attr('transform','translate(30,0)')
    .attr("cx",function(d,i){
        return i*50;
    })
    .attr("cy",function(d){
        return yScalereact(d)
    })
    .attr("r",5)
    .attr("fill","#c35033");

//画饼图
var dataset = [30, 50, 90, 60, 20];
var svg = d3.select("svg");

var pie=d3.pie()
var piedata=pie(dataset)
var outerRadius=150
var innerRadius=0
var arc=d3.arc().innerRadius(innerRadius).outerRadius(outerRadius)
var g=svg.append('g').attr("transform", "translate(550,550)");
var color=d3.schemeCategory10
g.selectAll('path')
  .data(piedata) 
  .enter()
  .append('path')
  .attr('fill',function(d,i){
    return color[i]
  })
  .attr('d',function(d){
    return arc(d)
  })
g.selectAll('text')
  .data(piedata)  
  .enter()
  .append('text')
  .attr('transform',function(d){
    return "translate("+arc.centroid(d)+")"
  })
  .attr('text-anchor','middle')
  .text(function(d){
    return d.data
  })


