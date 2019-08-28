# raphael
> 主要是画拓扑的插件,主要插件文件raphael.graph.js
1. 初始化
```js
    var topo = Graph.init(document.getElementById('topo'), {
        zoom: true,//是否可以缩放
        drag: true,//是否可以拖拽
        maxzoom: 1,//最大缩放程度
        zoomprop: 0.8,//当前缩放程度
        cx: 0.5,//开始x轴位置
        cy: 0.5,//开始y轴位置
    });
```
相当于初始化一个画布

2. 添加节点
> 控制节点的代码graphProto.addNode函数中,所有节点nodes
```js
for(var i=0;i<nodes.length;i++){
    var node=nodes[i]
    var option = {
        type: 'image',//节点类型
        x:500+i*20,//节点x轴位置
        y:100,//节点y轴位置
        width:50,//节点宽度
        height:50,//节点高度
        text: node.nodename,//节点文字
        id: node.nodecode,//节点id
        imageSrc:'img/dev.png',//节点图片
        hoverText: '<p>双击服务</p>',//鼠标移入到节点上面的时候，提示信息
        data: node,//节点数据
        
    };
    topo.addNode(node.nodecode, option, node);//添加节点
}
```

3. 添加连线
> 控制连线的代码graphProto.addLine函数中,所有连线lines
```js
var lineAttr = {
    "stroke-width": 2,
    "stroke": "green"
};
for(var i=0;i<lines.length;i++){
    var line=lines[i]
    topo.addLine(line.linestart, line.lineend, {
        id: line.linestart + "_" + line.lineend,//开始点和结束点
        attr: lineAttr,//连线的样式
        hoverText: "双击线段设置出参和入参",//鼠标放到连线上面之后提示信息
        data: line,//连线数据
    });
}
```
