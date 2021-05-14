//Counting class to store counting elements
class Counting {
	//creates elements identity
	constructor(x,y, name) {
		this.r = 40
		this.x = x
		this.y = y
		this.name = name
		this.one = "1"
		this.two = "2"
		this.three = "3"
		this.four = "4"
		this.five = "5"
		this.six = "6"
		this.seven = "7"
		this.eight = "8"
		this.ti = "ti"
		this.te = "te"
		this.ta = "ta"
		this.la = "la"
		this.le = "le"
	}//end of constructor
	
	//creates way to show elements
	show() {
		noStroke();
		fill(150)
		circle(this.x,this.y,this.r*2)
		fill(255)
		textSize(30)
		textAlign(CENTER, CENTER)
		text(this.name, this.x, this.y)
		/*
		text(this.one, 40, 461)
		text(this.two, 121, 461)
		text(this.three, 40+81*2, 461)
		text(this.four, 40+81*3, 461)
		text(this.five, 40+81*4, 461)
		text(this.six, 40+81*5, 461)
		text(this.ti, 40+81*6, 461)
		text(this.te, 40+81*7, 461)
		text(this.ta, 40+81*8, 461)
		text(this.la, 40+81*9, 461)
		text(this.le, 40+810, 461)*/
	}
}

// puts box around counting elements 
class CountingContainer {
	constructor (x,y){
		this.x = x
		this.y = y
		this.w = 640
	} // end of constructor
	
	show(){
		noFill();
		stroke(1,1,1)
		rect(this.x, this.y, this.w, this.w)
		
	}
	
}




// puts box around counting elements 
class RightCountingContainer {
	constructor (x,y){
		this.x = x
		this.y = y
		this.w = 400
	} // end of constructor
	
	show(){
		noFill();
		stroke(1,1,1)
		rect(this.x, this.y, this.w, this.w)
		
	}
	
}





//half note
class HalfNote {
	constructor(x,y) {
		
		this.x = x
		this.y = y
		this.w = 25
		this.val = 2
		this.spacing = 150;
		this.active = false
	}
	
	show() {
		noFill();
		circle(this.x,this.y + 40, this.w);
		strokeWeight(2);
		line(this.x+this.w/2, this.y+40, this.x+this.w/2, this.y-75);
		noFill()
		rect(this.x-15, this.y+150,35, 40)
	}
}


//quarter note	
class QuarterNote {
	constructor(x,y) {
		this.x = x
		this.y = y
		this.w = 30
		this.val = 1
		this.spacing = 100;
		this.active = false
	}
	
	show() {
		fill(0);
		circle(this.x,this.y + 40, this.w)
		line(this.x+this.w/2, this.y+40, this.x+this.w/2, this.y-75);
		noFill()
		rect(this.x-15, this.y+150,35, 40)
	}
}


//eighth note
class EighthNote {
	constructor(x,y) {
		this.x = x
		this.y = y
		this.w = 25
		this.val = 0.5 
		this.spacing = 90;
		this.active = false
	}
	
	show() {
		fill(0);
		line(this.x+this.w/2, this.y+40, this.x+this.w/2, this.y-75);
		line(this.x+this.w/2, this.y-75, this.x+35+this.w/2, this.y-75)
		line(this.x+35+this.w/2, this.y+40, this.x+35+this.w/2, this.y-75);
		circle(this.x+35,this.y + 40, this.w)
		circle(this.x,this.y + 40, this.w)
		noFill()
		rect(this.x-15, this.y+150,35, 40)
		rect(this.x+35, this.y+150,35, 40)
	}
}



function lvlGen(n) {
	var newNotes = [] 
	var answer = []
	var spacing = 250;
	var totalValue = 1;
	for (var i = 0; i <= n ; i++) { 
		var randItem = Math.floor(Math.random()*3); 
		console.log(randItem);
		if (randItem == 0) { 
			newNotes.push (new HalfNote(spacing ,160))
		} else if (randItem == 1) { 
			newNotes.push(new QuarterNote(spacing+50 ,160))
		} else if (randItem == 2) { 
			newNotes.push(new EighthNote(spacing ,160))
			answer.push(totalValue)
			totalValue += 0.5;
		}
		
		//if(){
			//console.log( newNotes );
		//	}
		spacing += newNotes[newNotes.length - 1].spacing;
		answer.push(totalValue);
		totalValue += newNotes[newNotes.length - 1].val;
		
	} 
	console.log(answer);
	 return(newNotes);
	
}




