const tree = [];
let spots = [];
let roots = [];
let angle, canvas;
let treesQuantity = 3;

class Branch {
    constructor(begin, end, thickness) {
        this.begin = begin;
        this.end = end;
        this.stroke = thickness;
        this.color = color(random(0, 222), random(0, 222), random(0, 222), random(40, 80));
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
        }
    );
}

function createTreeLog() {    
    
    tree.splice(treesQuantity, tree.length);

    for (let i = 1; i < (treesQuantity + 1); i++) {
        let spot = windowWidth * ((i)/(treesQuantity));
        if (spot < innerWidth && spot > 0) {
            tree.push(
                new Branch(createVector(spot, height), createVector(spot, height-random(50, height/5)), 5)
            );
        }
    }
    
    for (let i = 0; i < (treesQuantity-2); i++) {
        angle = random(PI / 10, PI / 4);
        tree[i].hasBranch = false;
    }

    
}


function randomizer() {
    angle = random(PI / 10, PI / 4);
    tree.splice(treesQuantity, tree.length);
    for (let i = 0; i < treesQuantity - 1; i++) {
        tree[i].hasBranch = false;
    }
}

function reDefineTrees() {
    howBigTree = round(random(100, 500));
    if (tree.length > 0) {
      tree.splice(0, tree.length);    
    }
    createTreeLog();    
}
