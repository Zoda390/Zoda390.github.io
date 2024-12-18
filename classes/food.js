var curfoodID = 0;
var eatenFoodIDs = [];

class Food{
    constructor(x,y){
        this.id = curfoodID;
        curfoodID++;
        this.pos = createVector(x,y);
    }

    render(){
        push();
        fill(0,200,0);
        circle(this.pos.x,this.pos.y, 10);
        pop();
    }
}