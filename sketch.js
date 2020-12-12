var dog,dogImg,dogImg1;
var database;
var food,foodStock;

function preload(){
  dogImg=loadImage("Images/dog.png");
  dogImg1=loadImage("Images/dog2.png");
}
function setup(){
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}



function draw() {  
  background(46,139,87);
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }
  drawSprites();
  fill(245,0,0);
  stroke("red");
  text("Food remaining : "+food,130,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!!!!",130,9,300,20);
}
function readStock(data){
  food=data.val();


  function writeStock(){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    } 
    database.ref('/').update({
      Food:x
    })
  }



