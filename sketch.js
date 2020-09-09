//Create variables here
var database, food, Dogimg, foodstock, happyDogimg, dog, foodS,x;
function preload()
{
  Dogimg=loadImage("images/dogImg1.png")
  happyDogimg=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  
  database=firebase.database();
  dog=createSprite(400,300)
  dog.addImage("puppy",Dogimg)
  dog.scale=0.1
  foodstock=database.ref('food')
  foodstock.on("value",readStock)

}


function draw() {  
background(46,139,87)
if(keyWentDown("UP_ARROW")){
  writeStock(foodS)
dog.addImage(happyDogimg)
}
  drawSprites();
  //add styles here
  fill(255,255,254)
  stroke("red")
text("food remaining:"+foodS,100,100)
}

function writeStock(x){
  if(x<=0){
    x=0
  }
  else{

  x=x-1
  }
  database.ref('/').update({
    food:x
  })
}
function readStock(data){
foodS=data.val();
}



