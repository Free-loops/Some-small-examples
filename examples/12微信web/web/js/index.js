var min_M = document.getElementById('min_M');
var min_T = document.getElementById('min_T');
var moveLeft = document.getElementById('moveLeft');
var moveRigt = document.getElementById('moveRigt');
var min_R = document.getElementsByClassName('min-r')[0];
var aLi_M = min_M.children;
var aLi_T = min_T.children;
var k = 0;
//自动轮播
var timer=null;
timer = setInterval(play,2000)
//鼠标移动到min_R上取消定时器
min_R.onmouseover = function(){
    clearInterval(timer);
    timer=null;
}
//鼠标移出min_R自动轮播
min_R.onmouseout = function(){
    timer = setInterval(play,2000)
}
//点击右侧按钮查看下一张图
moveRigt.onclick = function(){
    play()
}
//点击左侧按钮查看上一张图
moveLeft.onclick = function(){
    k--;
    if(k<0){
        k=2;
    }
    for(var i=0;i<aLi_M.length;i++){
        aLi_M[i].style.opacity = 0;
        aLi_T[i].className = "";
    }
    aLi_M[k].style.opacity = 1;
    aLi_T[k].className = "curent_pic";
}
//给所有小圆点添加点击事件 点击哪一个 哪一个圆点就变色 对应的图片显示出来
for(var i=0;i<aLi_T.length;i++){
    aLi_T[i].index = i;
    aLi_T[i].onclick = function(){
        for(var i=0;i<aLi_M.length;i++){
        aLi_M[i].style.opacity = 0;
        aLi_T[i].className = "";
    }
    aLi_M[this.index].style.opacity = 1;
    this.className = "curent_pic";
    }
}
function play(){
    k++;
    if(k>2){
        k=0;
    }
    for(var i=0;i<aLi_M.length;i++){
        aLi_M[i].style.opacity = 0;
        aLi_T[i].className = "";
    }
    aLi_M[k].style.opacity = 1;
    aLi_T[k].className = "curent_pic";
}