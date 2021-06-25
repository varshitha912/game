class Form {
  constructor() {
    this.input=createInput("Name:");
    this.button= createButton('Play');
    this.greeting = createElement('h3');
    this.title=createElement("h1");
    this.reset=createButton('reset')
   // this.bgImg=createImg("images/background.jpg")
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
   
  }
display(){
this.title.html("EGG CATCHER")
this.title.position (displayWidth/2-50,60);
this.input.position(displayWidth/2+30,displayHeight/2-40);
this.button.position(displayWidth/2+60,displayHeight/2);
this.reset.position(displayWidth/2+200,displayHeight/2-180);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();

player.name=this.input.value();
playerCount+=1; //playerCount=playerCount+1
player.update();
player.updateCount(playerCount);
this.greeting.html("Hello"+ player.name)
this.greeting.position(displayWidth/2-70,displayHeight/4)
});

this.reset.mousePressed(()=>{
player.updateCount(0);
game.update(0)



});



  }



















  
}