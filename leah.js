//Leah's file

class Flashcard {
	constructor(x,y) {
		this.x = x
		this.y = y
		this.w = 50
		this.h = 50
		this.topMeter = "4"
		this.bottomMeter = "4"
	}
	
	show() { 
		stroke(50);
		strokeWeight(5)
		noFill()
		rect(this.x, this.y, 700,200)
		rect(this.x, this.y+100, 700,5)
		stroke(0)
		textSize(100)
		fill(5)
		strokeWeight(2)
		text(this.topMeter, this.x+25,this.y+60)
		text(this.bottomMeter, this.x+25,this.y+160)
		//textSize(30)
		}
}
