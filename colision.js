function Colision() {
    this.objects = []
}
Colision.prototype = {
    addNewObject: function(object) {
        this.objects.push(object)
        object.colision = this;
    },

    identifier: function(object) {
        let id = '';
        let rect = object.hitBox();

        for (let i in rect) {
            id += 'x:' + rect[i].x + ',' +
                  'y:' + rect[i].y + ',' +
                  'r:' + rect[i].height + '\n'
        }
        return id
    },

    processor: function() {
        let listOfCollided = new Object();
            
        for (let i in this.objects){
            for (let j in this.objects){
                if (i == j) {continue;}
            
                let id1 = this.identifier(this.objects[i]);
                let id2 = this.identifier(this.objects[j]);

                if (!listOfCollided[id1]) {listOfCollided[id1] = []};
                if (!listOfCollided[id2]) {listOfCollided[id2] = []};
                
                if (! (listOfCollided[id1].indexOf(id2) >= 0 || listOfCollided[id2].indexOf(id1) >= 0) ) {
                    this.somebodyCollided(this.objects[i], this.objects[j]);
                    
                    listOfCollided[id1].push(id2);
                    listOfCollided[id2].push(id1);
                }
            }
        }
    },

    somebodyCollided: function(object1, object2) {
        let circle1 = object1.hitBox();
        let circle2 = object2.hitBox();

        colisions:
        for (let i in circle1) {
            for (let j in circle2) {
                
                if (this.intersectCircle(circle1[i], circle2[j])){ 
                    object2.iCollided(object1);
                    object1.iCollided(object2);
                }
                else {
                    object2.iNotCollided(object1);
                    object1.iNotCollided(object2);
                }
                break colisions;
            }
        }
    },

    intersectCircle: function(circle1, circle2) {    
        let dx = circle1.x - circle2.x;
        let dy = circle1.y - circle2.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
            
        if (distance < circle1.r + circle2.r) {
            return true
        }
        else {return  false}
    },
}