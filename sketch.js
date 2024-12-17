function setup() {
  var cnv = createCanvas(windowWidth-20, document.getElementById('body').getBoundingClientRect().height);
  cnv.parent('canvasDiv');
}

function draw(){
  background(33, 37, 41);
}


function windowResized(){
  resizeCanvas(windowWidth - 20, document.getElementById('body').getBoundingClientRect().height);
}