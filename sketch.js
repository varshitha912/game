var canvas, backgroundImage;
var form, player,game;
var playerCount;
var allPlayers;
var player1,player2,players;
var gameState = 0;
var bg1;
var score=0;
var p1_Img, p2_Img;
var eggs;
var egg1_Img,egg2_Img;
var eggGroup;
function preload(){
backgroundImage=loadImage("images/background.jpg")
bg1=loadImage("images/bg.jpg")
p1_Img=loadImage("images/Basket.png")
p2_Img=loadImage("images/Basket1.png")
egg1_Img=loadImage("images/egg1.png")
egg2_Img=loadImage("images/egg2.png")
eggGroup=new Group();
}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);// 400,400
  database = firebase.database();
   game=new Game();
   game.getState();
   game.start();
}


function draw(){
 
 if(playerCount===2){
   game.update(1);
 }
 if(gameState===1){
   game.play()
 }
 if(gameState===2){
   game.end();
 }
}
