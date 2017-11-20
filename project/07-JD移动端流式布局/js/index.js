window.onload = function () {
    var jd_banner = document.querySelector('.jd_banner');
    var banner = jd_banner.querySelectorAll('ul')[0];
    var btn = jd_banner.querySelectorAll('ul')[1];
    var span = btn.querySelectorAll('li');

    var jd_search = document.querySelector('.jd_search');
    var opcity = 0;
    window.onscroll = function () {
        var scrollTop = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
        if(scrollTop<jd_banner.offsetHeight) {
            opcity = scrollTop/jd_banner.offsetHeight*0.85;
        }else {
            opcity = 0.85
        }
        jd_search.style.background = 'rgba(201,21,35,'+opcity+')';
    }



    var width = jd_banner.offsetWidth;
    var index = 1;

    var timer = setInterval(function () {
        index ++;

        addTranstion();

        addTransform(-index*width);

    },3000)

    var addTranstion = function () {
        banner.style.transition = 'all 0.2s';
        banner.style.webkitTransition = 'all 0.2s';
    }
    var removeTransition = function () {
        banner.style.transition = 'none';
        banner.style.webkitTransition = 'none';
    }
    var addTransform = function (translateX) {
        banner.style.transform = 'translateX('+translateX+'px)';
        banner.style.webkitTransform = 'translateX('+translateX+'px)';
    }
    //监听第一张个最后一张图 实现无缝滚动
    banner.addEventListener('transitionend',function(){
        if(index>=9){
            index=1;
            removeTransition();
            addTransform(-index*width);
        }else if (index<=0) {
            index=8;
            removeTransition();
            addTransform(-index*width);
        }
        for (var i = 0; i < span.length; i++) {
            var ele = span[i];
            ele.classList.remove('now');
        }
        span[index-1].classList.add('now');
    })

    var starX = 0;

    jd_banner.addEventListener('touchstart',function(e){
        clearInterval(timer);
        starX = e.touches[0].pageX;
    })   

    jd_banner.addEventListener('touchmove',function(e){
        //清除浏览器默认拖拽行为
        e.preventDefault();
        var moveX = e.touches[0].pageX;
        var disX = moveX-starX;
        removeTransition();
        addTransform(-index*width+disX);
    })

    jd_banner.addEventListener('touchend',function(e){
        var endX = e.changedTouches[0].pageX;
        var distence = endX-starX;
        if(distence>0){
            // 右滑
            if(distence>width/3){
                addTranstion()                
                addTransform(-(index-1)*width);
                index--
            }else{
                addTranstion()                
                addTransform(-index*width);
            }
        }else if(distence<0){
            // 左滑
            if(Math.abs(distence)>width/3){
                addTranstion()
                addTransform(-(index+1)*width);
                index++
            }else{
                addTranstion()                
                addTransform(-index*width);
            }
        }
        starX = 0;
        clearInterval(timer);
        timer = setInterval(function () {

            index ++;
    
            addTranstion();
    
            addTransform(-index*width);
    
        },3000)
    })

    var sk_time = document.querySelector('.sk_time');
    var timeSpan = sk_time.querySelectorAll('span');
    var time = 3*60*60;
    var dowmTime = setInterval(function(){
        time--;
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = Math.floor(time%60);
        timeSpan[0].innerHTML = Math.floor(h/10);
        timeSpan[1].innerHTML = h%10
        timeSpan[3].innerHTML = Math.floor(m/10);
        timeSpan[4].innerHTML = m%10
        timeSpan[6].innerHTML = Math.floor(s/10);
        timeSpan[7].innerHTML = s%10

    },1000)

}