$(function(){
    var getData = function(callback) {
        if(window.data){
            callback&&callback(window.data);
            return;
        }
        $.ajax({
            type:'get',
            url:'js/img.json',
            data:{},
            dataType:'json',
            success:function(data){
                window.data = data;
                callback&&callback(window.data);
            }
        })
    }
    var random = function () {
        getData(function(data){
            console.log(data)
            var isM = $(window).width()<768? 1 : 0;
            var pointHtml = template('point',{list:data});
            var imgBoxHtml = template('imgBox',{list:data,isM:isM});
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imgBoxHtml);
        });
    }
    random();
    $(window).on('resize',function(){
        random();
    })

    var $productNav = $('.wjs_product .nav-tabs');
    console.log($productNav)
    var $lis = $productNav.find('li');
    var barWidth=0;    
    $.each($lis,function(i,ele){
        barWidth+=$(ele).outerWidth(true)
    })
    $productNav.width(barWidth);

    new IScroll($('.nav-tabs-parent')[0],{
        scrollX:true,
        scrollY:false
    });



    
})