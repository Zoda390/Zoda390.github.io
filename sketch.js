class Tile {
  constructor(x, y, z, biome) {
      this.pos = { x: x, y: y, z: z };
      this.biome = biome;
  }

  render(camX, camY, chunkX, chunkY) {
      push();
      let r = 0;
      let g = 0;
      let b = 0;
      if (this.biome == 0) {
          r = 85;
          g = 85;
          b = 85;
      } else if (this.biome == 1) {
          r = 0;
          g = 255;
          b = 0;
      } else if (this.biome == 2) {
          r = 0;
          g = 0;
          b = 255;
      } else if (this.biome == 3) {
          r = 255;
          g = 0;
          b = 0;
      }
      fill(
          r + (this.pos.z - 2) * zCC,
          g + (this.pos.z - 2) * zCC,
          b + (this.pos.z - 2) * zCC
      );
      if(betterRender){
          if(this.pos.z == 0){
              fill(119 - zCC, 220 - zCC, 230 - zCC)
          }
          else if(this.pos.z == 1){
              fill(119, 220, 230)
          }
          else if(this.pos.z == 2){
              fill(255, 255, 100)
          }
          else if(this.pos.z == 3){
            if(this.biome == 0){
              fill(230 - zCC, 157 - zCC, 106 - zCC)//orange-ish
            }
            else if(this.biome == 1){
                fill(108 - zCC, 230 - zCC, 168 - zCC)//green-ish
            }
            else if(this.biome == 2){
                fill(170 - zCC, 131 - zCC, 230 - zCC)//purple-ish
            }
            else if(this.biome == 3){
                fill(230 - zCC, 92 - zCC, 76 - zCC)//red-ish
            }
          }
          else if(this.pos.z == 4){
              if(this.biome == 0){
                  fill(230, 157, 106)//orange-ish
              }
              else if(this.biome == 1){
                  fill(108, 230, 168)//green-ish
              }
              else if(this.biome == 2){
                  fill(170, 131, 230)//purple-ish
              }
              else if(this.biome == 3){
                  fill(230, 92, 76)//red-ish
              }
          }
          else if(this.pos.z == 5){
              fill(100, 100, 100)
          }
          else if(this.pos.z == 6){
              fill(160, 160, 160)
          }
          else{
              fill(0, 0, 0)
          }
      }
      stroke(33, 37, 41);
      strokeWeight(2);
      rect(
          (chunkX * chunkSize + this.pos.x - camX) * tileSize,
          (chunkY * chunkSize + this.pos.y - camY) * tileSize,
          tileSize,
          tileSize
      );
      pop();
  }
}

class Chunk {
  constructor(x, y, biome) {
      this.pos = { x: x, y: y };
      this.biome = biome;
      this.roughness = 3;
      this.tiles = [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      for (let y = 0; y < this.tiles.length; y++) {
          for (let x = 0; x < this.tiles[y].length; x++) {
              this.tiles[y][x] = new Tile(x, y, -1, this.biome);
          }
      }
  }

  render(camX, camY) {
      for (let y = 0; y < this.tiles.length; y++) {
          for (let x = 0; x < this.tiles[y].length; x++) {
              this.tiles[y][x].render(camX, camY, this.pos.x, this.pos.y);
          }
      }
  }

  height_from_scratch() {
      this.tiles[0][0].pos.z = floor(random(0, maxHeight));
      this.tiles[chunkSize][0].pos.z = floor(random(0, maxHeight));
      this.tiles[0][chunkSize].pos.z = floor(random(0, maxHeight));
      this.tiles[chunkSize][chunkSize].pos.z = floor(random(0, maxHeight));
      let chunk_size = chunkSize;
      while (chunk_size > 1) {
          //&& keyIsDown(68) && millis() - lastMilli > 100
          let half = chunk_size / 2;
          for (let y = 0; y < chunkSize; y += chunk_size) {
              for (let x = 0; x < chunkSize; x += chunk_size) {
                  this.tiles[y + half][x + half].pos.z = floor(
                      (this.tiles[y][x].pos.z +
                          this.tiles[y][x + chunk_size].pos.z +
                          this.tiles[y + chunk_size][x].pos.z +
                          this.tiles[y + chunk_size][x + chunk_size].pos.z) /
                      4 +
                      random(0, this.roughness)
                  );
                  if (this.tiles[y + half][x + half].pos.z < 0) {
                      this.tiles[y + half][x + half].pos.z = 0;
                  }
                  if (this.tiles[y + half][x + half].pos.z > maxHeight) {
                      this.tiles[y + half][x + half].pos.z = maxHeight;
                  }
              }
          }
          for (let y = 0; y < chunkSize+1; y += half) {
              for (let x = (y + half) % chunk_size; x < chunkSize+1; x += chunk_size) {
                  let sum = 0;
                  let count = 0;
                  if (y > 0) {
                      sum += this.tiles[y - half][x].pos.z;
                      count++;
                  }
                  if (x > 0) {
                      sum += this.tiles[y][x - half].pos.z;
                      count++;
                  }
                  if (x < chunkSize - half) {
                      sum += this.tiles[y][x + half].pos.z;
                      count++;
                  }
                  if (y < chunkSize - half) {
                      sum += this.tiles[y + half][x].pos.z;
                      count++;
                  }
                  this.tiles[y][x].pos.z = max(
                      floor(sum / count + random(0, this.roughness)),
                      0
                  );
                  if (this.tiles[y][x].pos.z > maxHeight) {
                      this.tiles[y][x].pos.z = maxHeight;
                  }
              }
          }
          chunk_size = chunk_size / 2;
          this.roughness = this.roughness / 2;
      }
      if (chunk_size == 1) {
          this.tiles.splice(16, 1);
          for (let y = 0; y < this.tiles.length; y++) {
              this.tiles[y].splice(16, 1);
          }
      }
  }

  height_from_LT(chunks) {
      let LT = JSON.parse(
          JSON.stringify(chunks[this.pos.y - 1][this.pos.x - 1].tiles)
      );
      let L = JSON.parse(
          JSON.stringify(chunks[this.pos.y][this.pos.x - 1].tiles)
      );
      let T = JSON.parse(
          JSON.stringify(chunks[this.pos.y - 1][this.pos.x].tiles)
      );
      this.tiles[0][0].pos.z = LT[chunkSize-1][chunkSize-1].pos.z;
      for(let x = 0; x < this.tiles[0].length-1; x++){
          this.tiles[0][x+1].pos.z = T[chunkSize-1][x].pos.z;
      }
      for(let y = 0; y < this.tiles.length-1; y++){
          this.tiles[y+1][0].pos.z = L[y][chunkSize-1].pos.z;
      }
      this.tiles[chunkSize][chunkSize].pos.z = floor(random(0, maxHeight));
      let chunk_size = chunkSize;
      while (chunk_size > 1) {
          //&& keyIsDown(68) && millis() - lastMilli > 100
          let half = chunk_size / 2;
          for (let y = 0; y < chunkSize; y += chunk_size) {
              for (let x = 0; x < chunkSize; x += chunk_size) {
                  if (this.tiles[y + half][x + half].pos.z == -1) {
                      this.tiles[y + half][x + half].pos.z = floor(
                          (this.tiles[y][x].pos.z +
                              this.tiles[y][x + chunk_size].pos.z +
                              this.tiles[y + chunk_size][x].pos.z +
                              this.tiles[y + chunk_size][x + chunk_size].pos.z) /
                          4 +
                          random(0, this.roughness)
                      );
                  }
              }
          }
          for (let y = 0; y < chunkSize+1; y += half) {
              for (let x = (y + half) % chunk_size; x < chunkSize+1; x += chunk_size) {
                  let sum = 0;
                  let count = 0;
                  if (y > 0) {
                      sum += this.tiles[y - half][x].pos.z;
                      count++;
                  }
                  if (x > 0) {
                      sum += this.tiles[y][x - half].pos.z;
                      count++;
                  }
                  if (x < chunkSize - half) {
                      sum += this.tiles[y][x + half].pos.z;
                      count++;
                  }
                  if (y < chunkSize - half) {
                      sum += this.tiles[y + half][x].pos.z;
                      count++;
                  }
                  if (this.tiles[y][x].pos.z == -1) {
                      this.tiles[y][x].pos.z = floor(sum / count + random(0, this.roughness));
                  }
              }
          }
          chunk_size = chunk_size / 2;
          this.roughness = this.roughness / 2;
      }
      if (chunk_size == 1) {
          this.tiles.splice(0, 1);
          for (let y = 0; y < this.tiles.length; y++) {
              this.tiles[y].splice(0, 1);
          }
          for (let y = 0; y < this.tiles.length; y++){
              for(let x = 0; x < this.tiles[y].length; x++){
                  this.tiles[y][x].pos.x --;
                  this.tiles[y][x].pos.y --;
                  if (this.tiles[y][x].pos.z < 0) {
                      this.tiles[y][x].pos.z = 0;
                  }
                  if (this.tiles[y][x].pos.z > maxHeight) {
                      this.tiles[y][x].pos.z = maxHeight;
                  }
              }
          }
          chunk_size = 0;
      }
  }
}

class Map {
  constructor(seed) {
      this.seed = seed;
      this.chunks = [
          [0, 0, 0],
          [0, 0, 1],
          [2, 3, 1],
      ];
      for (let y = 0; y < this.chunks.length; y++) {
          for (let x = 0; x < this.chunks[y].length; x++) {
              this.chunks[y][x] = new Chunk(x, y, this.chunks[y][x]);
              if (x == 0 || y == 0) {
                  this.chunks[y][x].height_from_scratch();
              } else {
                  this.chunks[y][x].height_from_LT(this.chunks);
              }
          }
      }
  }
}

class Player {
  constructor() {
      this.pos = { x: 1, y: 1};
      this.lastmoveMilli = 0;
  }

  render(camX, camY) {
      push();
      fill(255);
      stroke(0);
      strokeWeight(3);
      circle((this.pos.x - camX) * tileSize + tileSize / 2, (this.pos.y - camY) * tileSize + tileSize / 2, 54);
      pop();
  }

  inputs() {
      if (keyIsDown(move_right_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.x++;
              if (this.pos.x > cam.pos.x + width / tileSize - 4) {
                  cam.pos.x++;
              }
              this.lastmoveMilli = millis();
          }
      }
      if (keyIsDown(move_left_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.x--;
              if (this.pos.x < cam.pos.x + 3) {
                  cam.pos.x--;
              }
              this.lastmoveMilli = millis();
          }
      }
      if (keyIsDown(move_up_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.y--;
              if (this.pos.y < cam.pos.y + 3) {
                  cam.pos.y--;
              }
              this.lastmoveMilli = millis();
          }
      }
      if (keyIsDown(move_down_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.y++;
              if (this.pos.y > cam.pos.y + height / tileSize - 4) {
                  cam.pos.y++;
              }
              this.lastmoveMilli = millis();
          }
      }
      if (keyIsDown(69)) {
          if (millis() - this.lastmoveMilli > 130) {
              console.log(serverMap.chunks[floor(this.pos.y/chunkSize)][floor(this.pos.x/chunkSize)].tiles[this.pos.y - (floor(this.pos.y/chunkSize)*chunkSize)][this.pos.x - (floor(this.pos.x/chunkSize)*chunkSize)].pos.z)
              this.lastmoveMilli = millis();
          }
      }
  }
}

class Camera {
  constructor() {
      this.pos = { x: 0, y: 0 };
      this.size = { x: width / tileSize, y: height / tileSize };
      this.lastmoveMilli = 0;
  }

  render() {
      let sChunkY = floor(this.pos.y / chunkSize);
      let eChunkY = floor((this.pos.y + this.size.y) / chunkSize);
      let sChunkX = floor(this.pos.x / chunkSize);
      let eChunkX = floor((this.pos.x + this.size.x) / chunkSize);
      for (let y = sChunkY; y <= eChunkY; y++) {
          for (let x = sChunkX; x <= eChunkX; x++) {
              if (serverMap.chunks[y] == undefined) {
                  serverMap.chunks[y] = [];
              }
              if (serverMap.chunks[y][x] == undefined) {
                  serverMap.chunks[y][x] = new Chunk(x, y, random([0, 1, 2, 3]));
                  if(x>0 && y>0 && serverMap.chunks[y-1][x-1] != undefined && serverMap.chunks[y][x-1] != undefined && serverMap.chunks[y-1][x] != undefined){
                      serverMap.chunks[y][x].height_from_LT(serverMap.chunks);
                  }
                  else{
                      serverMap.chunks[y][x].height_from_scratch();
                  }
              }
              if (serverMap.chunks[y][x] != undefined) {
                  serverMap.chunks[y][x].render(this.pos.x, this.pos.y); //rendering only the chunks close to screen
              }
          }
      }
  }

  inputs() {
      if (keyIsDown(move_cam_right_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.x++;
              this.lastmoveMilli = millis();
          }
      }
      if (keyIsDown(move_cam_left_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.x--;
              this.lastmoveMilli = millis();
          }
      }
      if (keyIsDown(move_cam_up_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.y--;
              this.lastmoveMilli = millis();
          }
      }
      if (keyIsDown(move_cam_down_button)) {
          if (millis() - this.lastmoveMilli > 130) {
              this.pos.y++;
              this.lastmoveMilli = millis();
          }
      }
  }
}

var tileSize = 64;
var chunkSize = 16;
var maxHeight = 6;
var zCC = 50;
var player;
var cam;
var serverMap;
var betterRender = true;
//Hi

function setup() {
  var cnv = createCanvas(windowWidth-20, document.documentElement.clientHeight);
  cnv.parent('canvasDiv');
  serverMap = new Map(1);
  player = new Player();
  cam = new Camera();
}

function draw(){
  background(33, 37, 41);
  cam.render();
  player.render(cam.pos.x, cam.pos.y);
  takeInput();
}

//keys
var move_right_button = 68; //d
var move_left_button = 65; //a
var move_up_button = 87; //w
var move_down_button = 83; //s
var move_cam_right_button = 39; //d
var move_cam_left_button = 37; //a
var move_cam_up_button = 38; //w
var move_cam_down_button = 40; //s

function takeInput() {
    player.inputs();
    cam.inputs();
}

function windowResized(){
  resizeCanvas(windowWidth, document.documentElement.clientHeight);
}