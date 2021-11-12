function Ship(ctx, img, cnv) {
    this.ctx = ctx
    this.img = img
    this.cnv = cnv

    this.x = 100
    this.y = 100
    this.radius = this.getRadius();
    this.rotation = 0

    this.size = 1
    this.width = 64
    this.height = 64

    this.sheet = new SpriteSheet(this.ctx, this.img, 1, 1, 125);
    this.j = 1
}

Ship.prototype = {
    update: function() {
        
    },

    centerX: function() {
        return this.x + this.width/2 
    },

    centerY: function() {
        return this.y + this.height/2 
    },

    draw: function() {
        ctx.save();
        ctx.translate(this.centerX(), this.centerY());
        ctx.rotate(this.rotation);

        ctx.drawImage(
            this.img, 
            0, 0, 
            this.width, this.height,
            -this.width/2, -this.height/2, 
            this.width * this.size, this.height * this.size
        )
        ctx.restore();
    },
    getRadius: function() {
        let width = this.img.width / 50;
        let height = this.img.height;
        let distance = Math.sqrt(width*width + height*height);
        this.radius = distance / 2;

        return this.radius
    },
    hitBox: function() {
        let circle =  [{x: this.x + this.img.width / 2, y: this.y + this.img.height / 2, r: this.radius}]

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
    iCollided: function(object) {
        if (false) {
            let now = new Date().getTime();
            if (!this.lastTime) {
                this.lastTime = now;
            }
            if (now - this.lastTime < 10) return;

            this.j += 0.01

            this.size = 1/this.j;

            lastTime = now;
        }
        //Animação da nave entrando no planeta
    
    },
    iNotCollided: function() {}
}