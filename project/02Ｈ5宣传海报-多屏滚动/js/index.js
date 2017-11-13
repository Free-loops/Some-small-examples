$(function($){

    $('.container').fullpage({
        //各个屏幕的颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //文本是否直居中
        verticalCentered: false,
        //是否使用导航按钮
        navigation: true,
        //当前屏幕加载完成事件
        afterLoad:function (link,index) {
            $('.section').eq(index-1).addClass('load')
        },
        //即将离开当前屏幕事件
        onLeave:function (index,nextIndex,direction) {
            var section = $('.section').eq(index-1)
            if (index == 2 && nextIndex == 3) {
                section.addClass('leaved')
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第三页到第四页*/
                section.addClass('leaved');
            }else if(index == 4 && nextIndex == 5){
                section.addClass('leaved');
            }else if(index == 5 && nextIndex == 6){
                section.addClass('leaved');
            }else if(index == 6 && nextIndex == 7){
                $('.screen07 .star img').each(function(i,ele){
                    $(this).css({'transition-delay':i*0.25+'s'})
                })
            }
        },
        //最好在组件初始完毕或者插件内容渲染完毕注册js事件 给动态渲染的元素注册事件
        afterRender:function () {
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen08').on('mousemove',function(e){
                var x=e.clientX-250
                var y=e.clientY-20
                $('.screen08 .hand').css({
                    top:y,
                    left:x
                })
            })
            $('.screen08 .again').on('click',function(){
                $('.load,.leaved').removeClass('leaved').removeClass('load');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            })
        }
    })
})