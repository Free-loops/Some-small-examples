var banner = document.getElementById('banner');
var btn = document.getElementById('btn');

var scale = -12.5;
var index = 0;
var timer = setInterval(function(){
    index++;
    scale-=12.5;
    if(index==6){
        animate(banner,scale);
        //如果运动到了最后一张(最后一个li) 再迅速显示为第一张(第二个li)
        scale=-12.5;//第二个li的位置
        banner.style.transform = "translateX("+scale+"%)";
        index=0;//并将index重置到0
    }else{
        animate(banner,scale);
    }
    //六个按钮
    for (var i = 0; i < btn.children.length; i++) {
        btn.children[i].classList.remove('active')
    }
    btn.children[index].classList.add('active');
},3000)
//运动函数封装
function animate(obj,scale){
    var a = scale+12.5;
    var timer = setInterval(function(){
        a-=0.3;
        if(a<=scale){
            a=scale;
            clearInterval(timer);
            timer=0;
        }
        obj.style.transform = "translateX("+a+"%)";
    },10)
}


var startX, startY, moveEndX, moveEndY, X, Y;   

banner.addEventListener('touchstart', function(e) {

    e.preventDefault();//阻止滑动滚动行为

    startX = e.touches[0].pageX;

    startY = e.touches[0].pageY;

});

banner.addEventListener('touchmove', function(e) {

    e.preventDefault();

    moveEndX = e.changedTouches[0].pageX;

    moveEndY = e.changedTouches[0].pageY;

    X = moveEndX - startX;

    Y = moveEndY - startY;

    if ( X > 0 ) {
        //向右
        index--;
        scale+=12.5;
        if(index==-1){
            animate(banner,scale);
            //如果运动到了第一张(第一个li) 再迅速显示为最后一张(倒数第二个li)
            scale=-75;//倒数第二个li的位置
            banner.style.transform = "translateX("+scale+"%)";
            index=5;//并将index重置到5
        }else{
            animate(banner,scale);
        }
        //六个按钮
        for (var i = 0; i < btn.children.length; i++) {
            btn.children[i].classList.remove('active')
        }
        btn.children[index].classList.add('active');
    }

    else if ( X < 0 ) {
        //向左
        index++;
        scale-=12.5;
        if(index==6){
            animate(banner,scale);
            //如果运动到了最后一张(最后一个li) 再迅速显示为第一张(第二个li)
            scale=-12.5;//第二个li的位置
            banner.style.transform = "translateX("+scale+"%)";
            index=0;//并将index重置到0
        }else{
            animate(banner,scale);
        }
        //六个按钮
        for (var i = 0; i < btn.children.length; i++) {
            btn.children[i].classList.remove('active')
        }
        btn.children[index].classList.add('active');
    }

    // else if ( Y > 0) {alert('向下');}

    // else if ( Y < 0 ) { alert('向上');}

    // else{alert('没滑动'); }

});
//动画积攒问题