// 修改DEVURL：html=>jsp
(function (win) {

    win.drawLine = function (topo, line, topoType) {
        var hoverText = new Array();
       
        if (line) {
            hoverText.push("<i style='display:block;color:#fcfcfc;text-align:center;font-size:13px; font-style:normal font-family: \"微软雅黑\"'>" + line.linedesc + "</i>");
            lineDBClick = function (id) {
            };
        }
        var alarmLevel = line.linestat.main;
        if (alarmLevel == 5) {
            alarmLevel = 6;
        }
        if (alarmLevel == 9) {
            alarmLevel = 10;
        }
        var lineAttr = {
            "stroke-width": 1.6,
            "stroke":'rgba(0,152,71,0.9)'
        };
        topo.addLine(line.linestart, line.lineend, {
            attr: lineAttr,
            mark:line.linestart+'_'+line.lineend,
            hoverText: hoverText.join("<br/>"),
            //dbclick: lineDBClick,
            data: line
        });
    };

    win.drawNodes = function (topoDom, opts, topoType) {

        var topo = Graph.getGraph(topoDom);

        var nodeType = opts.nodeType;
        var cx = opts.cx;
        var cy = opts.cy;
        var nodeDatas = opts.nodeDatas;
        if (!nodeDatas) {
            return;
        }

        var src;
        var osrc;
        var width;
        var height;
        var textAttr;
        var getHoverText;
        var dbclick;

        var isCurve = opts.isCurve ? opts.isCurve : "Y";

        var span = nodeDatas.length > 6 ? 40 : 60;

        var direct = opts.direct ? opts.direct : -1;


        src = "views/jsp/topo/css/icon/devo.png";
        width = 58;
        height = 58;
        textAttr = {
            "font-size": 13,
            "font-family": "微软雅黑",
            "fill": "#fff",
            "v-align": "bottom"
        };
        getHoverText = function (nodeData) {
            var textArray = new Array();
            return textArray.join("<br>");
        };
        dbclick = opts.dbclick;

        var len = nodeDatas.length;

        function getAuxPath() {

            if (1 == len) {
                return [
                    "M",
                    cx,
                    cy,
                    cx,
                    cy
                ];
            }

            if ("Y" == isCurve) {
                var dist = (len - 1) * span < 100 ? 100 : (len - 1) * span;
                var sPoint = {
                    x: opts.leftDist || (cx - dist),
                    y: cy
                };
                var ePoint = {
                    x: opts.rightDist || (cx + dist),
                    y: cy
                };
                var sAuxPoint = {
                    x: opts.leftDist || (cx - dist),
                    y: cy + dist / 1.6 * direct
                };
                var eAuxPoint = {
                    x: opts.rightDist || (cx + dist),
                    y: cy + dist / 1.6 * direct
                };
                return [
                    "M",
                    sPoint.x,
                    sPoint.y,
                    "C",
                    sAuxPoint.x,
                    sAuxPoint.y,
                    eAuxPoint.x,
                    eAuxPoint.y,
                    ePoint.x,
                    ePoint.y
                ];
            } else {
                span = span < 140 ? 140 : span;
                var dist = (len - 1) * span;
                var sPoint = {
                    x: cx - dist / 2,
                    y: cy
                };
                var ePoint = {
                    x: cx + dist / 2,
                    y: cy
                };
                return [
                    "M",
                    sPoint.x,
                    sPoint.y,
                    ePoint.x,
                    ePoint.y
                ];
            }
        }

        var sets = topo.paper.set();
        var auxLine = topo.paper.path(getAuxPath().join(","));
        var lenSpan = auxLine.getTotalLength() / (len - 1);
        for (var i = 0; i < len; i++) {

            var nodeData = nodeDatas[i];
            var id = nodeData.nodecode ? nodeData.nodecode : nodeData;
            var name = nodeData.nodename ? nodeData.nodename : nodeData;

            var sPos = getPos(topoDom, id);
           
            var pos = auxLine.getPointAtLength(i * lenSpan);
           
            //var pos ={x:200+i()*100,y:200+i*100} //auxLine.getPointAtLength((i-1) * lenSpan);
            var status, imgSrc;
            if (nodeData.nodestat) {
                status = nodeData.nodestat.main
            }
            imgSrc ='../img/dev.png'
            var option = {
                type: "image",
                x: pos.x - width / 2,
                y: pos.y - height / 2,
                width: width,
                height: height,
                imageSrc: imgSrc,
                text: name,
                textAttr: textAttr,
                hoverText: '鼠标',
                data: nodeData,
                //dbclick: dbclick
            };
            var gNode = topo.addNode(id, option, nodeData);
            sets.push(gNode.raphNode);
            sets.push(gNode.raphText);
            sets.push(gNode.raphAlarm);

        }
        auxLine.remove();
        return sets;
    };
    win.getPos = function (dom, eleID) {
        if (localStorage) {
            var topo = Graph.getGraph(dom);
            if ("" != topo.options.saveposflag) {
                var poss = localStorage[topo.options.saveposflag];
                if (poss) {
                    return JSON.parse(poss)[eleID];
                }
            }
        }
        return false;
    };


    
})(window);