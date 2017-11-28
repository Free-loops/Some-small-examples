$(function () {
    /*轮播图*/
    /*1.获取需要操作的元素*/
    var $snBanner = $('.sn_banner');
    var width = $snBanner.width();
    //var width = 750;
    console.log(width);
    /*核心的模块是不包含 扩展选择器*/
    var $imageBox = $snBanner.find('ul:first');
    var $pointBox = $snBanner.find('ul:last');

    var animateFuc =  function () {
        /*animate(属性对象，动画时间，动画速度，结束回调函数)*/
        $imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,'easing',function () {
            if(index >= 9){
                index = 1;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if(index <=0 ){
                index = 8;
                $imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            /*3.点容器的样式 index 1-8*/
            $pointBox.find('li').removeClass('now').eq(index-1).addClass('now');
        });
    }

    /*2.自动轮播 无缝轮播 无缝滑动（手势滑动）*/
    var index = 1;
    var timer = setInterval(function () {
        index ++;
        /*核心的模块是不包含 动画函数*/
        /*动画切换*/
        animateFuc();
    },5000);

    /*4. 手势切换 */
    /*核心的模块是不包含 手势模块*/
    $snBanner.on('swipeLeft',function () {
        console.log('next');
        /*下一张*/
        index ++;
        /*动画切换*/
        animateFuc();
    }).on('swipeRight',function () {
        console.log('prev');
        /*上一张*/
        index --;
        /*动画切换*/
        animateFuc();
    });

});