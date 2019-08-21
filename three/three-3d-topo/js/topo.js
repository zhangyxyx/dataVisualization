$(function(){
    window.data={
        "result":{
           "linearray":[
            {
                "linecode":"70,",
                "linestart":"N0029",
                "linedesc":"电路名称:乌鲁木齐A-上海C<br>Metric:5<br>带宽:10G<br>当前流入流速:0Gbps<br>当前流出流速:2Gbps<br>",
                "lineend":"N0037",
                "linestat":{
                    "main":0
                }
            },
            {
                "linecode":"70,",
                "linestart":"N0037",
                "linedesc":"电路名称:上海C-广州D<br>Metric:7<br>带宽:10G<br>当前流入流速:3Gbps<br>当前流出流速:4Gbps<br>",                    
                "lineend":"N0027",
                "linestat":{
                    "main":0
                }
            },
            {
                "linecode":"70,",
                "linestart":"N0033",
                "linedesc":"电路名称:北京B-上海C<br>Metric:4<br>带宽:10G<br>当前流入流速:2Gbps<br>当前流出流速:2Gbps<br>",                    
                "lineend":"N0037",
                "linestat":{
                    "main":0
                }
            },
            {
                "linecode":"70,",
                "linestart":"N0029",
                "linedesc":"电路名称:乌鲁木齐A-北京B<br>Metric:3<br>带宽:10G<br>当前流入流速:2Gbps<br>当前流出流速:3Gbps<br>",
                "lineend":"N0033",
                "linestat":{
                    "main":0
                }
            },
            {
                "linecode":"70,",
                "linestart":"N0029",
                "linedesc":"电路名称:乌鲁木齐A-广州D<br>Metric:1<br>带宽:10G<br>当前流入流速:2Gbps<br>当前流出流速:1Gbps<br>",
                "lineend":"N0027",
                "linestat":{
                    "main":0
                }
            },
           ],
            "nodeindex":{
                "upProvsDevices":[
                    {
                        "nodename":"广州D",
                        "nodesyscode":"DEV02293",
                        "nodesys":"163",
                        "nodetype":"node",
                        "nodedesc":"",
                        "nodecode":"N0027",
                        "nodestat":{
                            "main":0
                        }
                    },
                    {
                        "nodename":"乌鲁木齐A",
                        "nodesyscode":"DEV01952",
                        "nodesys":"163",
                        "nodetype":"node",
                        "nodedesc":"",
                        "nodecode":"N0029",
                        "nodestat":{
                            "main":0
                        }
                    },
                    {
                        "nodename":"北京B",
                        "nodesyscode":"DEV02253",
                        "nodesys":"163",
                        "nodetype":"node",
                        "nodedesc":"",
                        "nodecode":"N0033",
                        "nodestat":{
                            "main":0
                        }
                    },
                    {
                        "nodename":"上海C",
                        "nodesyscode":"DEV00065",
                        "nodesys":"163",
                        "nodetype":"node",
                        "nodedesc":"",
                        "nodecode":"N0037",
                        "nodestat":{
                            "main":0
                        }
                    }
                ],
           
            }
        },
        "err":"",
        "exitvalue":0
    }
    Graph.init(document.getElementById("prov-topo"), {
        cx: 0.65,
    });
    //drawTopo(data.result);
    function drawTopo(data){
        var topoDom = document.getElementById("prov-topo");
        var topo = Graph.getGraph(topoDom);

        var nodes = data.nodeindex;
        var lines = data.linearray;

        // 画节点
        drawNodes(topoDom, {
            nodeType: "省",
            cx: 200,
            cy: 200,
            nodeDatas: nodes.upProvsDevices
        });
        //画连线
        for (var i = 0, len = lines.length; i < len; i++) {
            drawLine(topo, lines[i]);
        }

    }
})