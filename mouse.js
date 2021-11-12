function Mouse(ship) {
    this.ship = ship
    this.x = 0
    this.y = 0

    cnv.addEventListener('mousemove', function(e){
        mouse.x = e.clientX - cnv.offsetLeft;
        mouse.y = e.clientY - cnv.offsetTop;
    }, false)
};
Mouse.prototype = {
    update: function() {
        var dx = mouse.x - ship.centerX();
        let dy = mouse.y - ship.centerY();

        ship.rotation = Math.atan2(dy, dx);

        let distance = Math.sqrt(dx*dx + dy*dy);

        if (distance >= 1) {
            ship.x += dx * 0.05;
            ship.y += dy * 0.05;
        }
    },
    draw: function() {},

};