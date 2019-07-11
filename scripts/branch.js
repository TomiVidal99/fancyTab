class Branch {
    constructor(begin, end, thickness) {
        this.begin = begin;
        this.end = end;
        this.stroke = thickness;
        this.color = color(255);
        this.turnAngle;
        this.hasBranch = false;
    }
    draw(turnAngle) {
        this.turnAngle = turnAngle;
        strokeWeight(this.stroke);
        stroke(this.color); 
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);        
    }
    branchRight() {
        let direction = p5.Vector.sub(this.end, this.begin);      
        direction.rotate(this.turnAngle);
        direction.mult(0.67);
        let newEnd = p5.Vector.add(this.end, direction)             
        return(new Branch(this.end, newEnd, this.stroke, this.turnAngle));        
    }
    branchLeft() {
        let direction = p5.Vector.sub(this.end, this.begin);      
        direction.rotate(-this.turnAngle);
        direction.mult(0.67);
        let newEnd = p5.Vector.add(this.end, direction)
        return(new Branch(this.end, newEnd, this.stroke, this.turnAngle));        
    }
    setColor() {
        this.color = color(random(0, 222), random(0, 222), random(0, 222), random(40, 80));
    }
}