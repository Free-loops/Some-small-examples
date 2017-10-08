(function(window){
    var oldFood = [];
    function Food(width,height,color,X,Y){
        this.width = width||20;
        this.height = height||20;
        this.color = color||"green";
        this.X = X||0;
        this.Y = Y||0;
    }
    Food.prototype.randem = function(map){
        //判断如果食物不是第一次渲染  就在渲染新的食物之前将旧食物删除
           //即oldFood不为空
        if(oldFood[0]){
            remove()
        }
        this.X=parseInt(Math.random()*(map.offsetWidth/this.width))*this.width;
        this.Y=parseInt(Math.random()*(map.offsetHeight/this.height))*this.height;
        var oDiv=document.createElement('div');
        oDiv.style.width=this.width+'px';
        oDiv.style.height=this.height+'px';
        oDiv.style.left = this.X+'px';
        oDiv.style.top = this.Y+'px';
        oDiv.style.backgroundColor = this.color;
        oDiv.style.position = 'absolute';
        map.appendChild(oDiv);
        setInterval(function(){oDiv.style.backgroundColor =  'rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')'},200);
        oldFood.push(oDiv);
    }
    //删除渲染的食物
    function remove(){
        //将这个旧食物从旧食物的父元素中移除
        oldFood[0].parentNode.removeChild(oldFood[0]);
        oldFood.splice(0,1);
    }
    window.Food=Food;
})(window)