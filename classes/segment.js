class Segment{
    constructor(length,thickness,c){
        this.base = createVector(0,0);
        this.end = createVector(0,0);
        this.l = length;
        this.a = 0;
        this.t = thickness;
        this.c = c;
        this.updateEnd();
    }

    render(){
        push();
        stroke(this.c);
        strokeWeight(this.t);
        line(this.base.x,this.base.y,this.end.x,this.end.y);
        pop();
        
    }

    update(tx,ty){
        let target = createVector(tx,ty);
        let dir = p5.Vector.sub(target, this.base);
        this.a = dir.heading();
        
        dir.setMag(this.l);
        dir.mult(-1);
        this.base = target.add(dir);

        this.updateEnd();

        
    }

    updateEnd(){
        this.end.x = this.base.x + (this.l* cos(this.a));
        this.end.y = this.base.y + (this.l* sin(this.a));
    }
}