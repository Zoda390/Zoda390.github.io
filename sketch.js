var shrike1;
var fish1;
var followPoint;
var canvas;
var shrikes = [];
var fish = [];
var food = [];
var shrikeCount = 1;
var fishCount = 20;
var foodCount = 10;
var Margin = 30;
var PixelSize = 1;

var COLORS = [];

function setup() {
    document.getElementById("AboutMeDesc").innerText = descJson;

    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('canvasDiv');

    angleMode(DEGREES);

    PixelSize = (windowWidth / (1920*2)) + 0.5;

    COLORS = [
        color("#A94949"),
        color("#CA5954"),
        color("#E56F4B"),
        color("#E39347"),
        color("#EEB551"),
        color("#E8C65B"),
        color("#BDA351"),
        color("#8B9150"),
        color("#557D55"),
        color("#446350"),
        color("#3E554C"),
        color("#8BB0AD"),
        color("#769FA6"),
        color("#668DA9"),
        color("#5C699F"),
        color("#5A5888"),
        color("#7C6DA2"),
        color("#947A9D"),
        color("#BC87A5"),
        color("#D9A6A6"),
        color("#D4C2B6"),
        color("#BDAA97"),
        color("#86735B"),
        color("#7E674C")
    ]

    for(let i = 0; i < shrikeCount; i++){
        shrikes.push(new Shrike(0.4*PixelSize));
    }
    for(let i = 0; i < fishCount; i++){
        fish.push(new Fish(0.7*PixelSize));
    }
    for(let i = 0; i < foodCount; i++){
        food.push(new Food(random(Margin,width-Margin),random(Margin,height-Margin)));
    }
}

function draw(){
    background("#234B66");
  
    for(let i = 0; i < shrikes.length; i++){
        shrikes[i].update(fish);
        shrikes[i].render();
    }
    
    //remove duplicates from eaten fish list
    eatenFishIDs = [...new Set(eatenFishIDs)];
    //console.log(tempSet);
  
    for(let i = 0; i < fish.length; i++){
        fish[i].calculateUpdate(food, shrikes, fish);
    }
    for(let i = 0; i < fish.length; i++){
        fish[i].update();
        fish[i].render();
        for(let j = 0; j < eatenFishIDs.length; j++){
            if(fish[i].id === eatenFishIDs[j]){
            fish.splice(i,1);
            eatenFishIDs.splice(j,1);
            i--;
            fish.push(new Fish(0.7*PixelSize));
            }
        }
    }
    
    //remove duplicates from eaten foods list
    eatenFoodIDs = [...new Set(eatenFoodIDs)];
    
    for(let i = 0; i < food.length; i++){
        food[i].render();
        for(let j = 0; j < eatenFoodIDs.length; j++){
            if(food[i].id === eatenFoodIDs[j]){
            food.splice(i,1);
            eatenFoodIDs.splice(j,1);
            i--;
            food.push(new Food(random(Margin,width-Margin),random(Margin,height-Margin)));
            }
        }
    }
}

function colorMap(val,start1,stop1,c1,c2){
    let r = map(val, start1,stop1, c1.levels[0],c2.levels[0]);
    let g = map(val, start1,stop1, c1.levels[1],c2.levels[1]);
    let b = map(val, start1,stop1, c1.levels[2],c2.levels[2]);
    return color(r,g,b);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight-8);
}



function showDiv(divID){
    let coverDiv = document.getElementById("CoverDiv");
    coverDiv.style["display"] = ("CoverDiv" == divID) ? "flex":"none";
    let projectsDiv = document.getElementById("ProjectsDiv");
    projectsDiv.style["display"] = ("ProjectsDiv" == divID) ? "flex":"none";
    let socialsDiv = document.getElementById("SocialsDiv");
    socialsDiv.style["display"] = ("SocialsDiv" == divID) ? "flex":"none";
}