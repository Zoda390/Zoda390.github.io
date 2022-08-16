function setup() {
    var myCanvas = createCanvas(100, 2000);
    myCanvas.parent('canvasDiv');
  }
  
  function draw() {
    background(255, 0);
    render_testTube();
  }

  function render_testTube(){
    push()
    strokeWeight(2)
    
    //Top
    fill(255)
    rect(width*0.1, height*0.12, width*0.7, height*0.025)
    fill(230, 95, 76)
    rect(width*0.2, height*0.11, width*0.5, height*0.02)
    line(width*0.1, height*0.12, width*0.8, height*0.12)
    
    //Home and About me
    fill(255)
    let xIn = width*0.15; //How far in the test tube goes
    let thickness = width*0.6; //How thick the test tube is
    let currentY = height*0.145;
    let length = 0.17;
    rect(xIn, currentY, thickness, height*length)
    currentY += height*length;

    //Games
    fill(255)
    length = 0.24;
    rect(xIn, currentY, thickness, height*length)
    currentY += height*length;
    
    //Demos
    fill(255)
    length = 0.28;
    rect(xIn, currentY, thickness, height*length)
    currentY += height*length;
    
    //Websites
    fill(255)
    length = 0.11;
    rect(xIn, currentY, thickness, height*length)
    currentY += height*length;

    //Bottom
    fill(255)
    circle(xIn + (thickness/2), height-(thickness/2), thickness)

    //Resume
    fill(255)
    length = 0.04;
    rect(xIn, currentY, thickness, (height*length))
    currentY += height*length;

    
    
    pop()
  }