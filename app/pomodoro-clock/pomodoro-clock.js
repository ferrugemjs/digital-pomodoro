export class PomodoroClock{
	constructor(){
		this.primaryColor = "#43c6ac";
		this.secondaryColor = "#191654";
		this.fillColor = "#efefef";
		this.hours = 24;
		this.minutes = 10;
		this.seconds = 0;
		this.intervalId = null;
	}
	changeColorHandler({target}){
		if(target && target.value){
			this.minutes = Number(target.value);
			this.calculateTime();
			this.refresh();
		}
	}
	calculateTime(){
		this.minutes = 59 - this.minutes;
	}
	incrementTime(){
		this.seconds++;
		if(this.seconds > 59){
			this.seconds = 0;
			this.minutes++;
			if(this.minutes > 59){
				this.minutes = 0;
				this.hours++;
			}
		}
		this.refresh();
	}
	connectedCallback(){
		this.calculateTime();
		this.intervalId = setInterval(this.incrementTime.bind(this),1000);
	}
	disconnectedCallback(){
		if(this.intervalId){
			clearInterval(this.intervalId);
		}	
	}
}