//Sketch file
var count = [] // for counting class
var countingcontainer = []// for counting class boxes
var note = []// array for all note classes
var flashCard 
var names = ["1", "2", "3", "4", "5", "6", "Ti", "Te", "Ta", "La", "Le"]
var counters = [];
var county = []
var response = []
var half = []
var quarter = []
var eighth = []


function setup() {
  createCanvas(900, 500);
	note.push(new HalfNote(0,0));
	note.push(new QuarterNote(0,0));
	note.push(new EighthNote(0,0));
	countingcontainer.push(new CountingContainer(0, 400));
	countingcontainer.push(new CountingContainer(490, 400))
	
	for (var i = 0; i < names.length; i++) {
		count.push(new Counting(40+81*i, 450, names[i]));
	}
	
	flashCard = new Flashcard(100, 100)
	
	// Create a level
	note = lvlGen(3);
}

//counting elements
function draw() {
  background(255);
	

	// Drawing generic objects
	for (var i in count) {
        count[i].show();
    }
	
	for (var i in countingcontainer) {
		countingcontainer[i].show();	
	}
	// box around counting element(number styles)

	
	//flashcard
	flashCard.show()
	
	
	 //halfnote

	for (var i in note) {
        note[i].show();
    }
	
	/* //quarternote
	for (var i = 0; i < 1; i++) {
		note.push(new QuarterNote(350, 160));
	}
	for (var i in note) {
        note[i].show();
    }
	
	//eighthnote
	for (var i = 0; i < 1; i++) {
		note.push(new EighthNote(500, 160));
	}
	for (var i in note) {
        note[i].show();
	}
	
	

	//AnotherEighthnote
	for (var i = 0; i < 1; i++) {
		note.push(new EighthNote(650, 160));
	}
	for (var i in note) {
        note[i].show();
    }*/
	
}


function objDist(obj1){	
	
	var a = obj1.x - mouseX;
	var b = obj1.y - mouseY;
	
	var c = Math.sqrt((a*a) + (b*b))

	return c;
}

function mousePressed() {
	for (var c in count) {
		if (objDist(count[c]) <= count[c].r) { 
			county.push(count[c].name)
		} 
		//if (objDist)
	}
}//end of mouseclicked

function keyTyped() {
	note = lvlGen(3)
}
/*
	if (response.length < )
response length must be less than # of boxes
if 1 clicked at bottom, adds 1 to arr
adds text in boxes when clicked.
*/