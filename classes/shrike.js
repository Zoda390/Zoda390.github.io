class Shrike{
    constructor(sizePercent){
        this.pos = createVector(random(Margin,width-Margin),random(Margin,height-Margin)); //point that holds the body, arms, and head;
        this.sp = sizePercent; // used for offset calcs and rendering the head
        this.lastTarget = createVector(0,0);
        this.vel = createVector(0,0);
        this.speed = 1;
        this.c1 = random(COLORS);
        this.c2 = random(COLORS);
        
        this.body = [];
        this.bodySegments = 20;
        this.body[0] = new Segment(50*sizePercent,50*sizePercent, this.c1);
        this.totalBodyLength = 10*sizePercent;
        for(let i = 0; i < this.bodySegments-1; i++){
            this.body.push(new Segment(
                map(i+1,0,this.bodySegments-1,50*sizePercent,10*sizePercent),
                map(i+1,0,this.bodySegments-1,50*sizePercent,10*sizePercent), 
                colorMap(i+1,0,this.bodySegments-1,this.c1,this.c2)
            ));
            this.totalBodyLength += this.body[i+1].l;
        }
        
        this.swishStrength = 50;
        this.swishTimer = 0;

        let armLs = [100*sizePercent,40*sizePercent,150*sizePercent];
        let armTs = [30*sizePercent, 15*sizePercent, 20*sizePercent];
        this.armTotalLength = armLs[0]+armLs[1]+armLs[2];
        this.armL = [];
        this.armL.push(new Segment(armLs[0], armTs[0], color(50)));
        this.armL.push(new Segment(armLs[1], armTs[1], this.c1));
        this.armL.push(new Segment(armLs[2], armTs[2], color(50)));
        this.armLFollow = createVector(0,0);
        this.armR = [];
        this.armR.push(new Segment(armLs[0], armTs[0], color(50)));
        this.armR.push(new Segment(armLs[1], armTs[1], this.c1));
        this.armR.push(new Segment(armLs[2], armTs[2], color(50)));
        this.armRFollow = createVector(0,0);
    }

    setColor(r1,g1,b1,r2,g2,b2){
        this.c1 = color(r1,g1,b1);
        this.c2 = color(r2,g2,b2);
        for(let i = 0; i < this.body.length; i++){
            this.body[i].c = colorMap(i+1,0,this.bodySegments-1,this.c1,this.c2);
        }
        this.armL[1].c = this.c1;
        this.armR[1].c = this.c1;
    }

    setColor1(r1,g1,b1){
        this.c1 = color(r1,g1,b1);
        for(let i = 0; i < this.body.length; i++){
            this.body[i].c = colorMap(i+1,0,this.bodySegments-1,this.c1,this.c2);
        }
        this.armL[1].c = this.c1;
        this.armR[1].c = this.c1;
    }

    setColor2(r2,g2,b2){
        this.c2 = color(r2,g2,b2);
        for(let i = 0; i < this.body.length; i++){
            this.body[i].c = colorMap(i+1,0,this.bodySegments-1,this.c1,this.c2);
        }
    }

    render(){
        for(let i = 0; i < this.body.length; i++){
            this.body[i].render();
        }
        this.armL[1].render();
        this.armL[0].render();
        this.armL[2].render();
        
        this.armR[1].render();
        this.armR[0].render();
        this.armR[2].render();
        
        
        //head
        push();
        noStroke();
        fill(this.c1);
        circle(this.pos.x-(cos(this.body[0].a+180)*(50*this.sp)), this.pos.y-(sin(this.body[0].a+180)*(50*this.sp)), 70*this.sp);
        fill(50);
        stroke(40);
        strokeWeight(10*this.sp);
        rectMode(CENTER);
        translate(this.pos.x-(cos(this.body[0].a+180)*(70*this.sp)), this.pos.y-(sin(this.body[0].a+180)*(70*this.sp)));
        rotate(this.body[0].a+45);
        rect(0,0, 50*this.sp, 50*this.sp);
        pop();
    }

    update(fish){
        //find closes fish
        let t = createVector (-width*height, -height*width);
        for(let i = 0; i < fish.length; i++){
            if(fish[i].pos.dist(this.pos) < 50){
                eatenFishIDs.push(fish[i].id);
            }
            if(fish[i].pos.dist(this.pos) < t.dist(this.pos)){
                t = fish[i].pos.copy();
            }
        }

        this.swishTimer++;
        if(this.swishTimer==360){
            this.swishTimer=0;
        }
        this.vel.x = t.x-this.pos.x;
        this.vel.y = t.y-this.pos.y;
        this.vel.setMag(this.speed);
        this.vel.rotate(this.swishStrength*sin(this.swishTimer));
        this.pos.x = this.pos.x+this.vel.x;
        this.pos.y = this.pos.y+this.vel.y;

        //Body
        this.body[0].update(this.pos.x,this.pos.y);
        for(let i = 1; i < this.body.length; i++){
            this.body[i].update(this.body[i-1].base.x, this.body[i-1].base.y);
        }

        //arms
        this.armLFollow.x = this.pos.x + 20*this.sp*cos(this.body[0].a+90);
        this.armLFollow.y = this.pos.y + 20*this.sp*sin(this.body[0].a+90);
        this.armL[0].update(this.armLFollow.x,this.armLFollow.y);
        for(let i = 1; i < this.armL.length; i++){
            this.armL[i].update(this.armL[i-1].base.x, this.armL[i-1].base.y);
        }

        this.armRFollow.x = this.pos.x - 20*this.sp*cos(this.body[0].a+90);
        this.armRFollow.y = this.pos.y - 20*this.sp*sin(this.body[0].a+90);
        this.armR[0].update(this.armRFollow.x,this.armRFollow.y);
        for(let i = 1; i < this.armR.length; i++){
            this.armR[i].update(this.armR[i-1].base.x, this.armR[i-1].base.y);
        }
    }
}