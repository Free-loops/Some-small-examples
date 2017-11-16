;(function (w) {
    var Game = function () {
        this.timer = null;        
        this.snake = new Snake();
        this.food = new Food();        
        this.snake.random();
        this.keyDirection();
        this.food.random();
        this.restartBtn();
        this.reviveBtn();
        this.gameStop();
        this.start();
    }
    //重新开始按钮
    Game.prototype.restartBtn = function () {
        var that = this
        var restartBtn = document.getElementsByClassName('restart')[0];
        restartBtn.onclick = function () {
            that.restart();
        }
    }
    //键盘控制方法
    Game.prototype.keyDirection = function () {
        that = this;
        document.onkeydown = function(){          
            switch(event.keyCode){
                case 37 :
                that.snake.direction = 'left';
                break;
                case 38 :
                that.snake.direction = 'up';
                break;
                case 39 :
                that.snake.direction = 'right';
                break;
                case 40 :
                that.snake.direction = 'down';
                break;
            }
        }
    }
    //重新开始
    Game.prototype.restart = function () {
        // var that = this;
        that.snake.remove();
        that.snake.body = [{x:3,y:2,color:'red'},{x:2,y:2,color:'blue'},{x:1,y:2,color:'blue'}];
        that.snake.direction = 'right';
        clearInterval(that.timer)
        that.timer = null;
        that.timer = setInterval(function () {
            that.snake.move();
            if(that.snake.body[0].x < 0||that.snake.body[0].y < 0||that.snake.body[0].x >= 40||that.snake.body[0].y >= 30){
                alert('Game over')
                clearInterval(that.timer)
                that.timer = null;
                return;
            }
            that.snake.random();
        },300)
    }
    //原地复活方法
    Game.prototype.revive = function () {
        switch(that.snake.direction){
            case 'right':
            that.snake.direction='left';
            break;
            case 'left':
            that.snake.direction='right';
            break;
            case 'up':
            that.snake.direction='down';
            break;
            case 'down':
            that.snake.direction='up';
            break;
        }
        clearInterval(that.timer)
        that.timer = null;
        that.timer = setInterval(function () {
            that.snake.move();
            if(that.snake.body[0].x < 0||that.snake.body[0].y < 0||that.snake.body[0].x >= 40||that.snake.body[0].y >= 30){
                alert('Game over')
                clearInterval(that.timer)
                that.timer = null;
                return;
            }
            that.snake.random();
        },300)
    }
    //复活按钮
    Game.prototype.reviveBtn = function () {
        var that = this;
        var reviveBtn = document.getElementsByClassName('reviveBtn')[0];
        reviveBtn.onclick = function () {
            that.revive();
        }
    }
    //暂停游戏方法
    Game.prototype.gameStop = function () {
        var that = this;
        var stopBtn = document.getElementsByClassName('stop')[0];
        stopBtn.onclick = function () {
            clearInterval(that.timer)
            that.timer = null;
        }
    }
    //开始游戏
    Game.prototype.start = function () {
        var that = this;
        var startBtn = document.getElementsByClassName('start')[0];
        startBtn.onclick = function () {
            clearInterval(that.timer)
            that.timer = null;
            that.timer = setInterval(function () {
                that.snake.move();
                if(that.snake.body[0].x < 0||that.snake.body[0].y < 0||that.snake.body[0].x >= 40||that.snake.body[0].y >= 30){
                    alert('Game over')
                    clearInterval(that.timer)
                    that.timer = null;
                    return;
                }
                that.snake.random();
            },300)
        }
    }
    w.Game = Game;
})(window)