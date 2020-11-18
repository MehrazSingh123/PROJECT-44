let snake;
let rez = 20;
let food;
let w;
let h;
let score = 0;


function setup() {
  createCanvas(400, 400);

  text(score +" Apple", 200, 100);

  //Creating the floor i.e. Preview Area
  w = floor(width / rez);
  h = floor(height / rez);

  frameRate(5);

  //Snake has been Spawned
  snake = new Snake();

  //Funtion 'foodlocation' has been Called
  foodLocation();
}


function foodLocation() {

  //Setting the Positions of the Apple
  let x = floor(random(w));
  let y = floor(random(h));

  //Making of the Apple
  food = createVector(x, y);
}


function keyPressed() {

  //Conditions for Controling The Snake 
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}


function draw() {
  background(220);

  scale(rez);

  //Condition for eating the food i.e. Apple
  if (snake.eat(food)) {
    foodLocation();
    score++;
  }

  //To update the snake i.e to grow it
  snake.update();
  //To show the Snake on the Screen
  snake.show();

  //Setting the End State for the Snake Game with the functions which is to be performed
  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  //Structuring the food i.e Apple
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}