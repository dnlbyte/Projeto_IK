function Animation(ctx, cnv, colision) {
    this.ctx = ctx;
    this.cnv = cnv;
    this.colision = colision;
    this.sprites = [];
    this.on = false;
}
Animation.prototype = {
    newSprite: function(sprite) {
        this.sprites.push(sprite); 
        sprite.animation = this;
    },
    clearScreen: function() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.cnv.width = window.innerWidth
        document.documentElement.clientWidth
        document.body.clientWidth;

        this.cnv.height = window.innerHeight
        document.documentElement.clientHeight
        document.body.clientHeight;
    },
    turnOn: function() {
        this.on = true;
        this.nextFrame();
    },
    turnOff: function(){
        this.on = false;
    },
    nextFrame: function() {
        if (!this.on) return;
        this.clearScreen();

        this.colision.processor();
        
        for (let i in this.sprites)
            this.sprites[i].update();
        for (let i in this.sprites)
            this.sprites[i].draw();

        let animation = this;
        requestAnimationFrame(function(){animation.nextFrame();});
    }
}

//=============================================================================
let loading = 0;
function loaded() {
    loading++;
    if (loading == 6) {init();}
}
function init() {
    animation.turnOn();
} 