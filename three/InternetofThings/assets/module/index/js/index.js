window.echartsArr={}
$(function(){
    drawLineOne('thingsLeftEveryOne')
    drawLineTwo('thingsLeftEveryTwo')

    drawLineOne('thingsRightEveryOne')
    drawLineTwo('thingsRightEveryTwo')

    drawLineOne('thingsBottomEveryOne')
    drawLineTwo('thingsBottomEveryTwo')
    drawLineOne('thingsBottomEveryThree')

    renderMap()
    clickIndex()
    $(window).resize(function(){
        for(var key in echartsArr){
            echartsArr[key].resize()
        }
    })
})
//指标
function clickIndex(){
    $('.regionalIndicator').off('click','div').on('click','div',function(){
        var mark=$(this).attr('data-mark')
        $('.regionalIndicator div').removeClass('active')
        $(this).addClass('active')
        $(".main").empty();
        var html=`<div id="container" class="container"></div>`
        $(".main").html(html)
        if(mark==='area'){
            renderMap()
        }else{
            main();
            render();
        }
    })
}