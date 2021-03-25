class Player{

constructor(){
this.index=null
this.name=null
this.distance=1000
this.health=500
this.rank=null
this.dist=500
}
playerCount(){
var playerCountRef=database.ref("playerCount")
playerCountRef.on("value",function(data){

    playerCount=data.val()
})

}
updateCount(count){
database.ref("/").update({

playerCount:count

})



}

players(){
var playerinfo=database.ref("players/player"+this.index)
database.ref(playerinfo).set({
name:this.name,
distance:this.distance,
health:this.health,                                                                
rank:this.rank,
dist:this.dist
})

}

static playersinfo(){
var playerInfoRef = database.ref("players");
playerInfoRef.on("value", (data) => {
    
    allPlayers = data.val();
 
})
}

time(){

var preperationtime2=database.ref("preperationtime2")
preperationtime2.on("value",function(data){

preperationtime2=data.val()

})
}

updatetime(count){
database.ref("/").update({

preperationtime2:count


})

}

time2(){

    var preperationtime=database.ref("preperationtime")
    preperationtime.on("value",function(data){
    
    preperationtime=data.val()
    
    })
    }
    
    updatetime2(count){
    database.ref("/").update({
    
    preperationtime:count
    
    
    })
    
    
    
    }






    
}