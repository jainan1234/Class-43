var words = ["Keys", "Arrow", "Right", "Elephant", "Mommy"]
var gameState = 0
var timer = 60

function setup() {
  createCanvas(displayWidth, displayHeight);
  
}

function draw() {
  background("lightblue");  

  if(gameState === 0){
    var n = Math.round(random(1, 5))
    textSize(20)
    fill("black")
    timer--
    
  if(timer <= 60 && timer >= 0){
    var word = words[n]
  }

    text(word, displayWidth/2 - 50, displayHeight/2 - 100)
  }
  gameState = 1
}

