var curFishID = 0;
var eatenFishIDs = [];

class Fish{
    constructor(sizePercent){
        this.id = curFishID;
        curFishID++;

        this.eyeRad = 100;
        this.pos = createVector(random(Margin,width-Margin),random(Margin,height-Margin));
        this.vel = createVector(1,0);
        this.vel.rotate(random(0,360));
        this.acc = createVector(0,0);
        this.speed = 3;
        this.vel.setMag(this.speed);
        this.maxForce = 0.07;
        this.lastTarget = createVector(0,0);
        

        this.sp = sizePercent; // used for offset calcs and rendering the head
        this.c1 = random(COLORS);
        this.c2 = random(COLORS);
        
        this.body = [];
        this.bodySegments = 10;
        this.body[0] = new Segment(7*sizePercent,(20*sizePercent)*(sin(((0)/(this.bodySegments/2))*90)), this.c1);
        this.totalBodyLength = 7*sizePercent;
        for(let i = 0; i < this.bodySegments-1; i++){
            this.body.push(new Segment(
                (7*sizePercent),
                (20*sizePercent)*(sin(((i+1)/(this.bodySegments/2))*90)), 
                colorMap(i+1,0,this.bodySegments-1,this.c1,this.c2)
            ));
            this.totalBodyLength += this.body[i+1].l;
        }
        
        this.swishStrength = 2;
        this.swishTimer = 0;
    }

    setColor(r1,g1,b1,r2,g2,b2){
        this.c1 = color(r1,g1,b1);
        this.c2 = color(r2,g2,b2);
        for(let i = 0; i < this.body.length; i++){
            this.body[i].c = colorMap(i+1,0,this.bodySegments-1,this.c1,this.c2);
        }
    }

    render(){
        push();
        noStroke();
        fill(255);
        circle(this.body[2].base.x,this.body[2].base.y,20*this.sp);
        fill(this.body[this.bodySegments-2].c);
        rectMode(CENTER);
        translate(this.body[this.bodySegments-2].base.x,this.body[this.bodySegments-2].base.y);
        rotate(this.body[this.bodySegments-2].a);
        triangle(10*this.sp,0,-10*this.sp,-10*this.sp,-10*this.sp,10*this.sp);
        pop();
        for(let i = 1; i < this.body.length; i++){
            this.body[i].render();
        }
        
    }

    edges(){
        let want = createVector(0,0);
        if(this.pos.x > width-Margin){
            want.add(-1, 0);
        }
        if(this.pos.x < Margin){
            want.add(1,0);
        }
        if(this.pos.y < Margin){
            want.add(0,1);
        }
        if(this.pos.y > height-Margin){
            want.add(0,-1);
        }
        want.mult(0.2);
        return want;
    }

    align(fish){
        let want = createVector(0,0);
        let total = 0;
        for(let i = 0; i < fish.length; i++){
            if(this.pos.dist(fish[i].pos) <= this.eyeRad && this.id !== fish[i].id){
                want.add(fish[i].vel);
                total++;
            }
        }
        if(total > 0){
            want.div(total);
            want.setMag(this.speed);
            want.sub(this.vel);
            want.limit(this.maxForce);
        }
        return want;
    }

    cohesion(fish){
        let want = createVector(0,0);
        let total = 0;
        for(let i = 0; i < fish.length; i++){
            if(this.pos.dist(fish[i].pos) <= this.eyeRad && this.id !== fish[i].id){
                want.add(fish[i].pos);
                total++;
            }
        }
        if(total > 0){
            want.div(total);
            want.sub(this.pos);
            want.setMag(this.speed);
            want.sub(this.vel);
            want.limit(this.maxForce);
        }
        return want;
    }

    seperation(fish){
        let want = createVector(0,0);
        let total = 0;
        for(let i = 0; i < fish.length; i++){
            if(this.pos.dist(fish[i].pos) <= this.eyeRad && this.id !== fish[i].id){
                let diff = p5.Vector.sub(this.pos, fish[i].pos);
                diff.div(this.pos.dist(fish[i].pos));
                want.add(diff);
                total++;
            }
        }
        if(total > 0){
            want.div(total);
            want.setMag(this.speed);
            want.sub(this.vel);
            want.limit(this.maxForce);
        }
        return want;
    }

    eat(food){
        //find the closest Food
        let t = createVector (-width*height, -height*width);
        for(let i = 0; i < food.length; i++){
            if(food[i].pos.dist(this.pos) < 10){
                eatenFoodIDs.push(food[i].id);
            }
            if(food[i].pos.dist(this.pos) < t.dist(this.pos)){
                t = food[i].pos.copy();
            }
        }
        let want = createVector(0,0);
        if(this.pos.dist(t) <= this.eyeRad){
            want.add(t);
            want.sub(this.pos);
            want.setMag(this.speed);
            want.sub(this.vel);
            want.limit(this.maxForce);
        }
        return want;
    }

    run(shrikes){
        let want = createVector(0,0);
        let total = 0;
        for(let i = 0; i < shrikes.length; i++){
            if(this.pos.dist(shrikes[i].pos) <= this.eyeRad){
                let diff = p5.Vector.sub(this.pos, shrikes[i].pos);
                diff.div(this.pos.dist(shrikes[i].pos));
                want.add(diff);
                total++;
            }
        }
        if(total > 0){
            want.div(total);
            want.setMag(this.speed);
            want.sub(this.vel);
            want.limit(this.maxForce);
        }
        return want;
    }

    calculateUpdate(food, shrikes, fish){
        this.acc.add(this.align(fish).mult(0.7));
        this.acc.add(this.cohesion(fish).mult(0.5));
        this.acc.add(this.seperation(fish).mult(1));
        this.acc.add(this.eat(food).mult(1));
        this.acc.add(this.run(shrikes).mult(1));
        this.acc.add(this.edges());
    }

    update(){
        this.vel.add(this.acc);
        this.vel.limit(this.speed);
        this.vel.rotate(this.swishStrength*sin(this.swishTimer));
        this.pos.add(this.vel);
        this.acc.set(0,0);
        this.swishTimer+= 2;
        if(this.swishTimer==360){
            this.swishTimer=0;
        }

        //Body
        this.body[0].update(this.pos.x,this.pos.y);
        for(let i = 1; i < this.body.length; i++){
            this.body[i].update(this.body[i-1].base.x, this.body[i-1].base.y);
        }
    }
}