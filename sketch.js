//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  dog=loadImage("Dog.png");
  happyDog=loadImage("dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(400,350);
  foodStock=dataBase.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg);
}
  drawSprites();
  fill("blue");
  textSize(20);
  text("press up arrow key to feed Bee milk");

}



