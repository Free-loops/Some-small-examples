var header = document.getElementsByClassName('header')[0];
var loginBtn = document.getElementsByClassName('loginBtn')[0];
var qLogin = document.getElementsByClassName('qlogin')[0];
var close = document.getElementsByClassName('close')[0];
var aLi = oList.getElementsByTagName('li');
var aNav = document.getElementsByClassName('aNav');
//当滚动条滚动过的距离大于100时顶部变小
document.onscroll = function(){
    if(document.documentElement.scrollTop>=100){
        header.style.height = 50+'px';
        oLogo.style.height = 40+'px';
        oLogo.style['margin-top']=-30+'px'
        oNotice.style.top = 32+'%';
        loginBtn.style.top = 32+'%';
        oNotice.style.right = 70+'px';
    }else{
        oLogo.style.height = 50+'px';
        header.style.height = 75+'px';
        oLogo.style['margin-top']=-25+'px'
        oNotice.style.top = 50+'%';
        loginBtn.style.top = 50+'%';
        oNotice.style.right = 100+'px';
    }
}
//点击登陆按钮弹出登陆框
loginBtn.onclick = function(){
    move(qLogin,'top',100,100,function(){
        move(qLogin,'top',40,30,function(){
        move(qLogin,'top',30,100,function(){
        move(qLogin,'top',10,50,function(){
        move(qLogin,'top',8,100)})})})})
}
//点击关闭按钮关闭登录框
close.onclick = function(){
    move(qLogin,'top',100,-400)
}
//给所有的导航a链接添加鼠标移上和移开事件
overOut()
function overOut(){    
    for(var i=0;i<aNav.length;i++){
        aNav[i].onmouseover = function(){
            this.style.color = "#3481cf";
        }
    }
    for(var i=0;i<aNav.length;i++){
        aNav[i].onmouseout = function(){
            if(this.parentElement==oList_M){
                this.style.color = "#666";
            }else{
                this.style.color = "#000";
            }
        }
    }
}
oNav.onmouseover = function(){
        oNav.style.color = "#3481cf";
        aLi[1].children[0].style.color = "#3481cf";
    }  
oNav.onmouseout = function(){
    oNav.style.color = "#000";
    aLi[1].children[0].style.color = "#909baa";
}
//给oNav添加点击事件
var onOff = true;
var k=oList_M.children.length*38;
oNav.onclick = function(){
    if(onOff){
        oNav.previousElementSibling.innerText = ''
        oList_M.style.height=k+'px';          
    }else{
        oNav.previousElementSibling.innerText = ''
        oList_M.style.height=0;
    }
    onOff = !onOff;
}
//给所有的导航a添加点击事件
console.log(aNav[1].parentElement)
            console.log(oList_M)
for(var i=0;i<aNav.length;i++){
    aNav[i].onclick = function(){
        for(var i=0;i<aNav.length;i++){
            aNav[i].style.color = '';
            aNav[i].style.backgroundColor = '';
            overOut()
        }
        this.onmouseover = null;
        this.onmouseout = null;
        this.style.color = '#fff';
        this.style.backgroundColor = '#00ace9';
    }
}
// 返回顶部
move_up.onclick = function(){
    document.documentElement.scrollTop=0;
}