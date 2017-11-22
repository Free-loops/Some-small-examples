var lt_banner = document.getElementById('lt_banner');
var banner = document.getElementById('banner');
var btnParent = document.getElementById('btn');
var btns = btnParent.querySelectorAll('li');
var width = lt_banner.offsetWidth;

var index = 0;
var timer = setInterval(function(){
    console.log(index)
    
    index ++;
    addTransition();
    addTransform(-width*index);
},2000)

var addTransition = function () {
    banner.style.transition = 'all 0.3s';
    banner.style.webkitTransition = 'all 0.3s';
}
var removeTransition = function () {
    banner.style.transition = 'none';
    banner.style.webkitTransition = 'none';
}
var addTransform = function (x) {
    banner.style.transform = 'translateX('+x+'px)';
    banner.style.webkitTransform = 'translateX('+x+'px)';    
}

banner.addEventListener('transitionend',function(){
    if(index >= 7) {
        index = 1;
        removeTransition();
        addTransform(-width*index);
    }
    if(index <= 0) {
        index = 6;
        removeTransition();
        addTransform(-width*index);
    }
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
    }
    btns[index-1].classList.add('active');
})
var startX = 0;
var dis = 0;
var isMove = false;
lt_banner.addEventListener('touchstart',function(e){
    clearInterval(timer)
    startX = e.touches[0].clientX;
})

lt_banner.addEventListener('touchmove',function(e){
    e.preventDefault();
    isMove = true;
    var moveX = e.touches[0].clientX;
    dis = moveX - startX;
    removeTransition();
    addTransform(-width*index+dis);
})
lt_banner.addEventListener('touchend',function(e){
    if (isMove) {
        if (Math.abs(dis)>width/3){
            if (dis>0) {
                index--;
            } else {
                index++;
            }
        }
        addTransition();       
        addTransform(-width*index);
    }
    startX = 0;
    dis = 0;
    isMove = false;
    clearInterval(timer);
    timer = setInterval(function(){
        index ++;
        addTransition();
        addTransform(-width*index);
    },2000)
})
