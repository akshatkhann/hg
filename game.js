class Game{

constructor(){

}
gameState(){
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){

gameState=data.val()


})

}
updateState(state){
database.ref("/").update({

gameState:state

})


}
async start(){
if(gameState===0){
player=new Player()
    var playerCountRef=await database.ref("playerCount").once("value")
if(playerCountRef.exists()){
playerCount=playerCountRef.val()

player.playerCount()
}
foarm=new Foarm()
foarm.display()
}
jet1=createSprite(displayWidth/2,displayHeight/2)
jet1.addImage(jetimg)
jet1.scale=0.4

jet2=createSprite(displayWidth/2,displayHeight/2)
jet2.addImage(jetimg)
jet2.scale=0.4

jet3=createSprite(displayWidth/2,displayHeight/2)
jet3.addImage(jetimg)
jet3.scale=0.4

jet4=createSprite(displayWidth/2,displayHeight/2)
jet4.addImage(jetimg)
jet4.scale=0.4

jet5=createSprite(displayWidth/2,displayHeight/2)
jet5.addImage(jetimg)
jet5.scale=0.4

jets=[jet1,jet2,jet3,jet4,jet5]
}
play(){

foarm.hide()

Player.playersinfo()
background(skyimg,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
var x=100
var y=200
var index=0
drawSprites()
for(var plr in allPlayers){
    
index = index+1
x = displayWidth-allPlayers[plr].distance;
y = displayHeight-allPlayers[plr].dist;


jets[index-1].x = x
jets[index-1].y = y 


if(player===player.index){
  
}

}


if(keyIsDown(LEFT_ARROW)&&player.index!==null){
player.distance+=3
player.players()


}
if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
    player.distance-=3
    player.players()
    
    
    }

    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.dist+=3
        player.players()
        
        
        }
        if(keyIsDown(DOWN_ARROW)&&player.index!==null){
            player.dist-=3
            player.players()
            
            
            }

            
      
        }

}



