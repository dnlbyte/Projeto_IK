function Background(ctx, img) {
    this.ctx = ctx;
    this.img = img

    this.sheet = new SpriteSheet(this.ctx, this.img, 1, 1, 160);
}
Background.prototype = {
    update: function() {
        this.sheet.nextFrame();
    },
    draw: function() {
        this.sheet.draw(1, 1);
    },
}