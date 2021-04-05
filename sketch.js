var hypnoticball;
var database,position;
var  gameState=0,playerCount;
var form,game,player;

function setup(){
    database=firebase.database();
    createCanvas(400,400);
    game=new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    
    drawSprites();
}


