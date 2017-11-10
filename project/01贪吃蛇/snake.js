(function(window){
    var element = [];
    function Snake(width,height,direction){
        this.width = width||20;
        this.height = height||20;
        this.body = [
            {x:3,y:2,color:'rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')'},
            {x:2,y:2,color:'green'},
            {x:1,y:2,color:'green'}
        ];
        this.direction=direction||"right";
    }
    //给snake添加渲染蛇的方法
    Snake.prototype.randem=function(map){
        //在渲染新的蛇之前先删除之前的蛇        
        remove()
        for(var i=0;i<this.body.length;i++){
            var oDiv=document.createElement('div');
            oDiv.style.width = this.width+'px';
            oDiv.style.height = this.height+'px';
            oDiv.style.left = this.body[i].x*this.width+'px';
            oDiv.style.top = this.body[i].y*this.height+'px';
            oDiv.style.backgroundColor = 'rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')';
            oDiv.style.position = 'absolute';
            map.appendChild(oDiv);
            element.push(oDiv);
        }
    }
    // 删除蛇的方法
    function remove(){
        for(var i=0;i<element.length;i++){
            element[i].parentNode.removeChild(element[i]);
        }
        element=[];
    }
    
    //给蛇添加移动方法
    Snake.prototype.move = function(food,map){
        for(var i=this.body.length-1;i>0;i--){
            //遍历蛇的每一节 把每一节的位置赋给他的下一节  这里使用倒叙循环 顺序将会丢失蛇节位置
            this.body[i].x=this.body[i-1].x;
            this.body[i].y=this.body[i-1].y;
        }
        //判断蛇节方向  让相应的蛇头坐标加1 或者减1
        switch(this.direction){
            case'right':
            this.body[0].x+=1;
            break;
            case'left':
            this.body[0].x-=1;
            break;
            case'up':
            this.body[0].y-=1;
            break;
            case'down':
            this.body[0].y+=1;
            break;
        }
        //在移动的过程中判断蛇是否吃到食物
            //找到当前蛇头的坐标
        var headX = this.body[0].x*this.width;
        var headY = this.body[0].y*this.height;
        
        //如果蛇头坐标与食物坐标相等 蛇长大一节 并且随机渲染一个新的食物
        if(headX==food.X&&headY==food.Y){
            //找到蛇的身体的最后一节
            var last = this.body[this.body.length-1];
            //把最后一节的所有属性付给一个新的对象
            var newJie = {
                x:last.x,
                y:last.y,
                color:last.color
            };
            //并将这个新的对象添加到数组body中
            this.body.push(newJie);
            //渲染一个新的食物
            food.randem(map);
        }
    }
    window.Snake = Snake;
})(window)