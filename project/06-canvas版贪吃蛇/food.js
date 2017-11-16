;(function(w){
    var Food = function(ctx){
        this.ctx = ctx || document.getElementsByTagName('canvas')[0].getContext('2d');        
        this.width = 20;
        this.height = 20;
        this.body = {x:0,y:0}
    }
    Food.prototype.random = function () {
        this.remove();
        this.body.x = getRandom(0,this.ctx.canvas.width/this.width)
        this.body.y = getRandom(0,this.ctx.canvas.height/this.height)
        this.ctx.fillRect(this.body.x*this.width,this.body.y*this.height,this.width,this.height)
    }
    Food.prototype.remove = function () {
        this.ctx.clearRect(this.body.x*this.width,this.body.y*this.height,this.width,this.height)
    }
    //a到b之间的随机整数
    function getRandom(a,b){
        return Math.floor(Math.random()*(b-a))+a;
    }
    w.Food = Food;
})(window)