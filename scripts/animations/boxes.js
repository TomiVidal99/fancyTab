const boxes = [];
const acceleration = 0.01;
const maxAmountBoxes = 15;

class Box {
    constructor(x, y, l, w, index, vel, a) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.length = l;
        this.velocity = vel;
        this.index = index;
        this.shouldBeEliminated = false;
        this.rotationAngle = a;
        this.color = color(random(255), random(255), random(255));
    }
    newIndex(i) {
        this.index = i;
    }
    defineVelocity() {
        if (this.velocity < 3.8) {
            this.velocity += acceleration;
        }
    }
    definePosition() {
        if ((this.y) < (innerHeight  + this.length)) {
            this.y += this.velocity;
        } else {
            this.shouldBeEliminated = true;
        }
    }
    draw() {
        push();
            translate(this.x + this.width, this.y + this.length);
            stroke(255);
            strokeWeight(4);
            //point(this.width, this.length);
            //point(-this.width, -this.length)
            noStroke();
            fill(this.color);
            angleMode(DEGREES);
            rotate(this.rotationAngle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.length);
        pop();
    }
    rotate(ang) {
        this.rotationAngle += ang;
    }
}

function createInitialBoxes() {
    for (let i = 0; i < maxAmountBoxes; i++) {
        const size = random(10, 30);
        const x = random(size/2, (innerWidth - (size/2)));
        const y = random(0, -800);
        const angle = random(0, 45);
        const cVel = random(0, 2);
        boxes.push(new Box(
            x,
            y,
            size,
            size,
            i,
            cVel,
            angle
        ));
    }
}


function startBoxesAnimation(bool) {
    if (bool) {
        let currentIndex, eliminate;     
        loopIndex = 0;
        boxes.forEach((box) => {
            box.newIndex(loopIndex);
            box.defineVelocity();
            box.rotate(0.78);
            box.definePosition();
            box.draw();
            if (box.shouldBeEliminated) {
                const vel = box.velocity;
                const ang = box.rotationAngle;
                boxes.splice(box.index, 1);
                const size = random(20, 60);
                const x = random(size/2, (innerWidth - (size/2)));
                const y = random(0, -800);
                boxes.push(new Box(
                    x,
                    y,
                    size,
                    size,
                    (boxes.length-1),
                    vel,
                    ang
                ));
            }
            loopIndex++;
        });
        
    }
}