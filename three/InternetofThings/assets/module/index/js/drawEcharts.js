//左边
window.drawLineOne=function(obj){
    var myChart = echarts.init(document.getElementById(obj));
    var option = {

       grid: {
            top: "25%",
            bottom: "20%",
            left:'20%'
        },
       tooltip: {
           trigger: "axis",
           axisPointer: {
               type: "shadow",
               label: {
                   show: true
               }
           }
       },
       legend: {
           data: ["丢包", "时延"],
           top: "15%",
           textStyle: {
               color: "#01FCE3"
           }
       },
       xAxis: {
           data: [
               "10/01",
               "10/02",
               "10/03",
               "10/04",
               "10/05",
               "10/06",
               "10/07",
               "10/08",
               "10/09",
           ],
           axisLine: {
               show: true //隐藏X轴轴线
           },
           axisTick: {
               show: true //隐藏X轴刻度
           },
           axisLabel: {
               show: true,
               textStyle: {
                   color: "#01FCE3" //X轴文字颜色
               }
           },
            axisLine: {
                       lineStyle: {
                           color: '#01FCE3'
                           }
                   },
       },
       yAxis: [{
               type: "value",
               name: "ms",
               nameTextStyle: {
                   color: "#01FCE3"
               },
               splitLine: {
                   show: false
               },
               splitLine: {
                   show: false
               },
               axisTick: {
                   show: true
               },
               axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                        }
                },
               axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#01FCE3" //X轴文字颜色
                    }
                },
           },
           {
               type: "value",
               name: "%",
               nameTextStyle: {
                   color: "#01FCE3"
               },
               position: "right",
               splitLine: {
                   show: false
               },
               splitLine: {
                   show: false
               },
               axisTick: {
                   show: true
               },
               axisLine: {
                lineStyle: {
                    color: '#01FCE3'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "#01FCE3" //X轴文字颜色
                    }
                },
           },
           
       ],
       dataZoom:[
        {
            type:'inside',
        }
       ],
       series: [{
               name: "丢包",
               type: "line",
               yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
               smooth: true, //平滑曲线显示
               showAllSymbol: true, //显示所有图形。
               symbol: "circle", //标记的图形为实心圆
               symbolSize: 0, //标记的大小
               itemStyle: {
                   //折线拐点标志的样式
                   normal:{
                    color:"orange"
                   }
               },
               lineStyle: {
                   normal:{
                        color: "orange"
                   }
               },
               areaStyle:{
                   color: "rgba(5,140,255, 0.2)"
               },
               data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
           },
           {
               name: "时延",
               type: "bar",
               barWidth: 15,
               itemStyle: {
                   normal: {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                               offset: 0,
                               color: "#00FFE3"
                           },
                           {
                               offset: 1,
                               color: "#4693EC"
                           }
                       ])
                   }
               },
               data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
           }
       ]
    };
    myChart.setOption(option)
    echartsArr[obj]=myChart
}
window.drawLineTwo=function(obj){
    var myChart = echarts.init(document.getElementById(obj));
    var option={
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'diamond',
            itemGap: 13,
            data: ['湿度 %'],
            top:'10%',
            left: 'center',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            top: "25%",
            bottom: "20%",
            left:'20%'
        },
        dataZoom:[
            {
                type:'inside',
            }
        ],
        xAxis: [{
            type: 'category',
            boundaryGap: false,

            axisLine: {
                lineStyle: {
                    color: '#01FCE3'
                }
            },
            data: ['1', '2', '3', '4', '5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#01FCE3'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: "#01FCE3",
                    fontSize: '12',
                }
            },
            axisTick:{
                show:true
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                }
            }
        }],
        series: [{
            name: '湿度 %',
            type: 'line',
            smooth: true,
            markLine:{ //最大值和最小值
            data:[
            {
                type:"min",name:"最小值"
        
            },
            {
                type:"max",name:"最大值"
            }]
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    color:'#00A1EA'
                }
            },
            data: [50,52,52,52,52,58,52,55,44,52,52,52,33,52,52,52,20,52,52,52,52,52,55,52,52,23,52,52,52,52,52]
        },  ]
    
    }
    myChart.setOption(option)
    echartsArr[obj]=myChart
}
//右边

