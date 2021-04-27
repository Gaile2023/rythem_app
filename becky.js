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