var player,game,foarm;
var gameState=0,playerCount=0
var jet1,jet2,jet3,jet4,jet5,jetimg,skyimg;
var jets=[],allPlayers,reload,sc,scAngle,preperationtime,preperationtime2;
function preload(){
skyimg=loadImage("sky.png")
jetimg=loadImage("jet.jpg")


}

function setup() {
  database=firebase.database() 
  angleMode(DEGREES)
  createCanvas(displayWidth-30,displayHeight-30);
  
  preperationtime=10
  preperationtime2=60
 
  game=new Game()
game.start()
game.gameState()

player.time()
player.time2()
}

function draw() {
  background(1000);  

 
if(playerCount===5){
game.updateState(1)

 }
 if(gameState===1){
game.play()

preperationtime2=preperationtime2-2
player.updatetime(preperationtime2)

if(preperationtime2<1){
  preperationtime2=60
  preperationtime=preperationtime-1
player.updatetime2(preperationtime)
}

textSize(30)
text("preperation time : "+preperationtime,displayWidth/2,displayHeight/2-320)

 }
 
 
}                            

