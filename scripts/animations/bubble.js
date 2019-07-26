const directions = [-1, 1];
const minSize = 20;
const maxSize = 100;
const collitionCount = 2;
const collitionExplosion = false;
const totalBubbles = 15;
let bubbles = [];


class Bubble {
    constructor(s, x_, y_, r_, g_, b_, h_, vx, vy, xD, yD, cD, cE) {
        this.size = s;
        this.x = x_;
        this.y = y_;
        this.r = r_;
        this.g = g_;
        this.b = b_;
        this.h = h_;
        this.xDirection = xD;
        this.yDirection = yD;
        this.velocityX = vx;
        this.velocityY = vy;
        this.countDown = cD;
        this.counter = 0;
        this.dead = false;
        this.collitionExplosion = cE;
    }
    draw() {
        push();
            stroke(255);
            fill(this.r, this.g, this.b, this.h);
            ellipse(this.x, this.y, this.size, this.size);
        pop();
    }
    move() {
        this.x = this.x + (this.velocityX*this.xDirection);
        this.y = this.y + (this.velocityY*this.yDirection);
    }
    wallBounce() {
        if ((this.x + this.size) <= 0 || (this.x + this.size) >= innerWidth) {
            this.xDirection = this.xDirection*(-1);
        }
        if ((this.y + this.size) <= 0 || (this.y + this.size) >= innerHeight) {
            this.yDirection = this.yDirection*(-1);
        } 
    }
    objectBounce() {
        bubbles.forEach(bubble => {
            let distance = dist(this.x, this.y, bubble.x, bubble.y);
            if (distance <= (this.size/2 + bubble.size/2) && distance !== 0) {
                if (this.counter === this.countDown && collitionExplosion === true) {
                    this.dead = true;
                    bubble.dead = true;
                }
                this.counter++;
                this.r = random(0, 255);
                this.g = random(0, 255);
                this.b = random(0, 255);
                this.xDirection = this.xDirection*(-1);
                this.yDirection = this.yDirection*(-1);
            }
        });
    }
}


function startBubbleAnimation(bool) {
    if (bool === true) {
        bubbles.forEach(bubble => {
            if (bubble.dead === true) {
                bubbles.splice(bubbles.indexOf(bubble), 1);
            }
            bubble.draw();
            bubble.wallBounce();
            bubble.objectBounce();
            bubble.move();
        });
    }
}

function createInitialBubbles() {
    for (let amount = 0; amount < totalBubbles; amount++) {
        let x_ = random(0, innerWidth);
        let y_ = random(0, innerHeight);
        var ran_1 = directions[Math.floor(Math.random()*directions.length)];
        var ran_2 = directions[Math.floor(Math.random()*directions.length)];
        let bSize = random(minSize, maxSize);
        let velocityX = random(0.1, 6);
        let velocityY = random(0.1, 6);
        let r = random(0, 255);
        let g = random(0, 255);
        let b = random(0, 255);
        let h = random(30, 100);
        bubbles.push(new Bubble(bSize, x_, y_, r, g, b, h, velocityX, velocityY, ran_1, ran_2, collitionCount));
    }    
}