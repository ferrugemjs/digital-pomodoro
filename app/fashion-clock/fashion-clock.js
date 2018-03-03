export class FashionClock{
	constructor(){
		this.primaryColor = '#6A82FB';
		this.secondaryColor = '#FC5C7D';
		this.hours = 23;
		this.minutes = 49;
		this.seconds = 0;
	}
	hoursToPercent(){
		return  this.hours * 4.16;
	}
	minutesToPercent(){
		return this.minutes * 1.66;
	}
	secondsToPercent(){
		return this.seconds * 1.66;
	}
	attributeChangedCallback(attr,oldVl,newVl){
		if(attr === 'minutes' && this.minutes !== Number(newVl)){
			this.minutes = Number(newVl);
		};
	}
}