;(function(w){
    var Snake = function(ctx,direction){
        this.ctx = ctx || document.getElementsByTagName('canvas')[0].getContext('2d');
        this.width = 20;
        this.heigth = 20;
        this.body = [{x:3,y:2,color:'red'},{x:2,y:2,color:'blue'},{x:1,y:2,color:'blue'}];
        this.direction = direction || "right";
    }
    Snake.prototype.random = function(){
        for(var i=0;i<this.body.length;i++){
            this.ctx.fillStyle = this.body[i].color;
            this.ctx.fillRect(this.body[i].x*this.width,this.body[i].y*this.heigth,this.width,this.heigth);
        }
    }
    Snake.prototype.move = function(){
        this.remove();
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
        if(game.food.body.x==this.body[0].x&&game.food.body.y==this.body[0].y) {
            this.eatFood();
            game.food.random();
        }
    }
    Snake.prototype.remove = function(ctx){
        for(var i=0;i<this.body.length;i++){
            this.ctx.clearRect(this.body[i].x*this.width,this.body[i].y*this.heigth,this.width,this.heigth);
        }
    }
    Snake.prototype.eatFood = function(){
        var newJie = {x:this.body[this.body.length-1].x,y:this.body[this.body.length-1].y}
        this.body.push(newJie);
    }
    w.Snake = Snake;
})(window)