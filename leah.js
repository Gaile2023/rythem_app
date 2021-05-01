class Flashcard {
	constructor(x,y) {
		this.lineX = 50
		this.x = x
		this.y = y
		this.w = 50
		this.h = 50
		this.card = rect(this.x, this.y, 700,200)
		this.line1 = rect(this.x, this.y+100, 700,5)
		this.topMeter = 4
		this.bottomMeter = 4
	}
	
	show() { 
		stroke(1,1,1);
		fill(255)
		this.card
		fill(255)
		this.line1
	}
}