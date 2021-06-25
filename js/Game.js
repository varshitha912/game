class Game {
  constructor(){}
  
getState(){
  var gameStateRef=database.ref('gameState');
  gameStateRef.on("value",function(data){
    gameState=data.val();
  })
}

update(state){
  database.ref('/').update({
    gameState:state
  });
}

async start(){
if(gameState===0){

player=new Player();
var playerCountRef=await database.ref('playerCount').once("value");
// if playerCount=have any value==true
if(playerCountRef.exists()){
playerCount=playerCountRef.val();
player.getCount();

}
form=new Form();
form.display();

}
player1=createSprite(200,720);
player1.addImage("player1",p1_Img);
player2=createSprite(800,720)
player2.addImage("player2",p2_Img)
player2.scale=0.8
players=[player1,player2];
} 

play(){
                
  form.hide();

  Player.getPlayerInfo();
   image(bg1, 0, 0, 1000, 800);
   var x =100;
   var y=200;
   var index =0;
   drawSprites();
   for(var plr in allPlayers){
      
      
       index = index+1;
       x = 500-allPlayers[plr].distance;
       y=500;
       
       players[index -1].x = x;
       players[index - 1].y = y;
         
       if(index === player.index){
           
           fill("black");
           textSize(25);
           text(allPlayers[plr].name ,x-25,y+25);

           
       }
      
           textSize(25);
           fill("white");
         //  text("Player 1 :" +allPlayers.player1.score,50,50);
         // text("Player 2 :" + allPlayers.player2.score, 50, 100);
         // text("Player 2 :" + allPlayers.player2.score, 50, 100);
   
   }
  
  
   

  if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
      player.distance -= 10
      player.update();
  }
  if (keyIsDown(LEFT_ARROW) && player.index !== null) {
      player.distance += 10
      player.update();
  }

if(frameCount%20===0){
eggs=createSprite(random(100,1000),0,50,50);
eggs.scale=0.2
eggs.velocity=5;


var ran=Math.round(random(1,2));
switch(ran){
case 1: eggs.addImage("egg",egg1_Img);
break;
case 2:eggs.addImage("egg",egg2_Img);
break;
}







eggGroup.add(eggs);   

}

if(player.index!==null){
for(var i=1;i<eggGroup.length;i++){
if(eggGroup.get(i).isTouching(players)){
  eggGroup.get(i).destory();
  player.score=player.score+1;
  player.update();
}

}

}
 




}

end(){
  console.log("Game Ended");
  }

  }