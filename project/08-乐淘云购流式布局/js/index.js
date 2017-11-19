var banner = document.getElementById('banner');
var btn = document.getElementById('btn');


banner.style.transition = '1s'
var scale = -12.5;
var index = 0;
var timer = setInterval(function(){
    index++;
    if(index==7){
        banner.style.transition = 'none';
        index=0;
        scale=0;
    }
    if(index==1){
        banner.style.transition = '1s'
    }
    
    for (var i = 0; i < btn.children.length; i++) {
        btn.children[i].classList.remove('active')
    }
    if(index>5){
        btn.children[0].classList.add('active');
    }else{
        btn.children[index].classList.add('active');
    }

    scale-=12.5;
    banner.style.transform = "translateX("+scale+"%)";
},2000)


