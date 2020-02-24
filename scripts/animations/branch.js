const tree = [];
let root1, root2, angle, canvas, spot1, spot2, spot3;

class Branch {
    constructor(begin, end, thickness) {
        this.begin = begin;
        this.end = end;
        this.stroke = thickness;
        this.color = color("white");
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


function generateTree() {
    tree.forEach(
        function(branch){
            branch.draw(angle);              
            if ( !branch.hasBranch && tree.length < howBigTree) {
                tree.push(branch.branchRight());                
                tree.push(branch.branchLeft());                
                branch.hasBranch = true;
            }
        });
    if (tree[(howBigTree)] && !colored) {
        defineColorForAll();
        colored = true;
    }
}

function createTreeLog() {    
    defineTreeSpots();
    root1 = new Branch(createVector(spot1, height), createVector(spot1, height-(height/7)), 5);
    root2 = new Branch(createVector(spot3, height), createVector(spot3, height-(height/7)), 5);
    tree.push(root1, root2);
    randomizer();
}

function defineTreeSpots() {
    spot1 = windowWidth * (1/4);
    spot2 = windowWidth * (2/4);
    spot3 = windowWidth * (3/4);    
}

function randomizer() {
    angle = random(PI / 10, PI / 4);
    tree.splice(3, tree.length);
    tree[0].hasBranch = false;
    tree[1].hasBranch = false;
}

function reDefineTrees() {
    howBigTree = round(random(100, 500));
    if (tree.length > 0) {
      tree.splice(0, tree.length);    
    }
    createTreeLog();    
    defineTreeSpots();    
    colored = !colored;
    defineColorForAll();
}

function defineColorForAll() {
    tree.forEach(
        function(branch){
            branch.setColor();
        }
    );
}