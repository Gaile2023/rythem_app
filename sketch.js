//Sketch file
var count = [] // for counting class
var countingcontainer = [] // for counting class boxes
var flashhy = [] // for flashcard
var halfn = [] // for halfnote
var quartern = []//for quaternote
var eighthn = []// for eighthnote
//var notes = [HalfNote, QuarterNote, EighthNote] // array for all note classes

function setup() {
  createCanvas(900, 500);
}

//counting elements
function draw() {
  background(255);
	for (var i = 0; i < 11; i++) {
		count.push(new Counting(40+81*i, 450));
	}
	for (var i in count) {
        count[i].show();
    }

	
	
	// box around counting element(number styles)
	for (var i = 0; i < 1; i++) {
		countingcontainer.push(new CountingContainer(0, 400));
	}
	for (var i in countingcontainer) {
        countingcontainer[i].show();
    }
	
		// box around counting element(letter styles)
	for (var i = 0; i < 1; i++) {
		countingcontainer.push(new CountingContainer(490, 400));
	}
	for (var i in countingcontainer) {
        countingcontainer[i].show();
    }
	
	//flashcard
	for (var i = 0; i <= 1; i++) {
		flashhy.push(new Flashcard(100, 100));
	}
	for (var i in flashhy) {
        flashhy[i].show();
    }
	
	
	//halfnote
	for (var i = 0; i < 1; i++) {
		halfn.push(new HalfNote(200, 200));
	}
	for (var i in halfn) {
        halfn[i].show();
    }
	
	
	//quarternote
	for (var i = 0; i < 1; i++) {
		quartern.push(new QuarterNote(350, 200));
	}
	for (var i in quartern) {
        quartern[i].show();
    }
	
	
	
	//eighthnote
	for (var i = 0; i < 1; i++) {
		eighthn.push(new EighthNote(500, 200));
	}
	for (var i in quartern) {
        quartern[i].show();
    }
	
	
	

	//AnotherEighthnote
	for (var i = 0; i < 1; i++) {
		eighthn.push(new EighthNote(650, 200));
	}
	for (var i in quartern) {
        quartern[i].show();
    }

	
	
	
	
}


