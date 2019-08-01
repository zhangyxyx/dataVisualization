$(function () {
    var topo = Graph.init(document.getElementById('topo'), {
        cx: 0.65,
        drag: true,
        saveposflag:true,
    });
    renderNode(topo,data)
    renderLine(topo,data)
    //渲染节点
    function renderNode(topo,data){
        var first=data.nodeindex.first
        var scend=data.nodeindex.scend
        for(var i=0;i<first.length;i++){
            var node=first[i]
            var option = {
                type: 'image',
                x:500+i*20,
                y:100,
                width:50,
                height:50,
                text: node.nodename,
                id: node.nodecode,
                imageSrc:'img/dev.png',
                hoverText: '<p>双击服务</p>',
                data: node,
                
            };
            topo.addNode(node.nodecode, option, node);
        }
        for(var i=0;i<scend.length;i++){
            var node=scend[i]
            var x=500+(Math.floor(scend.length/2)-i)*80
            var y=200
            var option = {
                type: 'image',
                x:x,
                y:y,
                width:50,
                height:50,
                text: node.nodename,
                id: node.nodecode,
                imageSrc:'img/dev.png',
                hoverText: '<p>双击服务</p>',
                data: node,
                
            };
            topo.addNode(node.nodecode, option, node);
        }
    }
    function renderLine(topo,data){
        var lines=data.lineArray
        var lineAttr = {
            "stroke-width": 2,
            "stroke": "green"
        };
        for(var i=0;i<lines.length;i++){
            var line=lines[i]
            topo.addLine(line.linestart, line.lineend, {
                id: line.linestart + "_" + line.lineend,
                attr: lineAttr,
                hoverText: "双击线段设置出参和入参",
                data: line,
            });
        }
        
    }

    //节点图标
    window.imageSrc = function (name) {
        var imgsrc = ''
        imgsrc = 'img/dev.png'
        return imgsrc
    }
})