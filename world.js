function World(ctx, img, x, y) {
    this.ctx = ctx;
    this.img = img;
    this.x = x;
    this.y = y;

    this.flag = true

    this.radius = this.getRadius();

    this.sheet = new SpriteSheet(this.ctx, this.img, 1,50, 160);
}
World.prototype = {
    update: function() {
        this.sheet.nextFrame();   
    },
    draw: function() {
        this.sheet.draw(
            this.x  - this.img.width / 100, 
            this.y - this.img.height / 2
        );
    },
    getRadius: function() {
        let width = this.img.width / 50;
        let height = this.img.height;
        this.radius = (Math.sqrt(width*width + height*height))/2;

        return this.radius
    },
    hitBox: function() {
        let circle =  [{
            x: this.x + (this.img.width / 100 * (this.sheet.size - 1)),
            y: this.y + (this.img.height / 2 * (this.sheet.size - 1)),
            r: this.radius * this.sheet.size
        }]

        for (let i in circle) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = 'red';
            this.ctx.arc(
                circle[i].x, 
                circle[i].y, 
                circle[i].r, 0, Math.PI * 2
            );
            this.ctx.stroke();
        }
        return circle;
    },
    iCollided: function(object){
        this.hitBox()
        this.sheet.size = 2;
    },
    iNotCollided: function() {
        this.sheet.size = 1
    }
}