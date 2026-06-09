// Var Setup
var green = 0
var red = 0

// Setup
function setup() {
	console.log("setup: ");

	//Canvas Setup
	cnv = new Canvas(windowWidth, windowHeight)

	// Sprite Setup
	red = new Sprite(random(0, windowWidth), random(0, windowHeight), 50, 'd')
	red.color = '#ff0000'
	green = new Sprite(windowWidth / 2, windowHeight / 2 + 75, 25, 'd')
	green.color = '#00ff00'

	// Text Setup
	fill = ('#ffffff');
	textAlign(CENTER, CENTER);
	textSize(22)
}

// Start shenangagins
var Start = 0

function win() {
	Start = -1
	red.remove();
}

console.log(Start)

//Clicker and Timer Setup
var Timer = 0
console.log(Timer)
function draw() {
	background(0, 0, 255)
	if (Start > 0) {for (var i = 0; i < 100; i++) {
		text("hey look i can use a variable in a for loop!! here look at the number! " + (i), random(0, windowWidth), random(0, windowHeight));
		console.log(i+1) }}
	if (mouse.presses()) {
		if (Start >= 0) {
			console.log("click")
			Start = Start + 1
			console.log(Start)

			//Movement
			if (Start > 0) {

				//X Movement
				if (green.x > mouseX) {
					green.vel.x = -1
					console.log(green.vel.x)
				} else {
					if (green.x < mouseX) {
						green.vel.x = 1
						console.log(green.vel.x)
					}
				}

				// Y Movement
				if (green.y > mouseY) {
					green.vel.y = -1
					console.log(green.vel.y)
				} else {
					if (green.y < mouseY) {
						green.vel.y = 1
						console.log(green.vel.y)
					}
				}
			}
		}
	}

	//Reset Movement
	else {
		green.vel.x = 0;
		green.vel.y = 0;
	}

	//Progress Detection, End and Timer Operation
	green.collides(red, win);
	if (Start == 0) {

		text("Get Green to Red", windowWidth / 2, windowHeight / 2);

	}
	else {
		if (Start > 0)
			Timer = Timer + 1
		text((Timer / 100), 75, 75)
	}
	if (Start < 0) {
		green.remove();
		if (Timer == 0) {
			text("you either cheated or got very lucky your time is 0 milliseconds", (windowWidth / 2), (windowHeight / 2));
		} else {
			text("you win! your finishing time is " + (Timer / 100) + " seconds", (windowWidth / 2), (windowHeight / 2));
			firebase.database().ref('/ClickerScore').set(Timer)
		}
	}
}