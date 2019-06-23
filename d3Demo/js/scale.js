window.scale_z=function(datax,datay,g){
    var dataset = datax
    var datasetY = datay
    var svg = d3.select("svg");
    // var g = svg.append("g")
    //     .attr("transform", "translate(" + marge.top + "," + marge.left + ")");
    //x轴
    //为坐标轴定义一个线性比例尺
    var xScale = d3.scaleLinear()
        .domain([0,dataset.length])
        .range([0, 250]);
    //定义一个坐标轴
    var xAxis = d3.axisBottom(xScale)//定义一个axis，由bottom可知，是朝下的
        .ticks(7);//设置刻度数目
    g.append("g")
        .attr("transform", "translate(" + 20 + ",250)")
        .call(xAxis);
    //Y轴
    //为坐标轴定义一个线性比例尺
    var yScale = d3.scaleLinear()
        .domain([d3.max(datasetY),0])
        .range([0, 250]);
    //定义一个坐标轴
    var yAxis = d3.axisLeft(yScale)
        .ticks(7);
    g.append("g")
        .attr("transform", "translate(" + 20 + ",0)")
        .call(yAxis);
}