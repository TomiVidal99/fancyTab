const boxes = [];
const acceleration = 9.8;
const maxAmountBoxes = 5;

class Box {
    constructor(x, y, l, w) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.length = l;
        this.area = l * w;
        this.velocity = 0;
    }
    defineVelocity() {
        this.velocity += acceleration;
    }
    definePosition() {
        if ((this.y + this.area) > innerHeight) {
            this.y += this.velocity;
        }
    }
    draw() {
        push();
            noStroke();
            fill(255);
            translate(this.x, this.y);
            rect(0, 0, this.width, this.length)
        pop();
    }
}

function createInitialBoxes() {
    for (let i; i < maxAmountBoxes; i++) {
        const size = random(2, 20);
        const x = random(size/2, (innerWidth - (size/2)));
        const y = (size/2);
        boxes.push(new Box(
            x,
            y,
            size,
            size
        ))
    }
}


function startBoxesAnimation(bool) {
    if (bool) {
        forEach((box) => {
            box.defineVelocity();
            box.definePosition();
            box.draw();
        });
    }
}