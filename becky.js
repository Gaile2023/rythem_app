//Counting class to store counting elements
class Counting {
	//creates elements identity
	constructor(x,y) {
		this.w = 80
		this.x = x
		this.y = y
		this.one = "1"
		this.two = "2"
		this.three = "3"
		this.four = "4"
		this.five = "5"
		this.six = "6"
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
		circle(this.x,this.y,this.w)
		fill(255)
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
		text(this.le, 40+810, 461)
	}
}

// puts box around counting elements 
class CountingContainer {
	constructor (x,y){
		this.x = x
		this.y = y
		this.w = 480
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
		this.w = 50
		this.halfnotey = circle(this.x,this.y + 40, this.w);
	}
	
	show() {
		this.halfnotey
		strokeWeight(4);
		line(this.x, this.y+40, this.x, this.y-75);
	}
}


//quarter note	
class QuarterNote {
	constructor(x,y) {
		this.x = x
		this.y = y
		this.w = 50
		fill(1,1,1);
		this.quarternotey = circle(this.x,this.y + 40, this.w)
	}
	
	show() {
		line(this.x, this.y+40, this.x, this.y-75);
		this.quarternotey
	}
}



//eighth note
class EighthNote {
	constructor(x,y) {
		this.x = x
		this.y = y
		this.w = 25
		this.firsteighthnotey = circle(this.x,this.y + 40, this.w)
		this.secondeighthnotey = circle(this.x+35,this.y + 40, this.w)
		line(this.x, this.y+40, this.x, this.y-75);
		line(this.x, this.y-75, this.x+35, this.y-75)
		line(this.x+35, this.y+40, this.x+35, this.y-75);
	}
	
	show() {
		this.firsteighthnotey
		this.secondeighthnotey
	}
}















		fill(100,100,100)
		circle(this.x,this.x,this.w,this.w)
		text(this.one, 0, 81)
		text(this.two, 81, 81)
		text(this.three, 81*2, 81)
		text(this.four, 81*3, 81)
		text(this.five, 81*4, 81)
		text(this.six, 81*5, 81)
		text(this.ti, 81*6, 81)
		text(this.te, 81*7, 81)
		text(this.ta, 81*8, 81)
		text(this.la, 81*9, 81)
		text(this.le, 810, 81)
	}
}