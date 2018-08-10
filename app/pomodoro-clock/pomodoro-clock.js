import * as Push from "push.js";

export class PomodoroClock{
	constructor(){
		this.primaryColor = "#43c6ac";
		this.secondaryColor = "#191654";
		this.hours = 24;
		this.minutes = 10;
		this.seconds = 0;
		this.intervalId = null;
		this.configuredMinutes = 10;
		this.message = "it's time to pause!";
		this.isNotifying = false;
	}
	changeMinutesHandler({target}){
		if(target && target.value){
			this.seconds = 0;
			this.configuredMinutes = Number(target.value);
			this.calculateTime();
			this.setCookie('configured-minutes',target.value,90);
			this.refresh();
		}
	}
	calculateTime(){
		this.minutes = this.configuredMinutes;
	}
	decrementTime(){
		this.seconds--;
		if(this.seconds < 0){
			this.seconds = 59;
			this.minutes--;
			if(this.minutes < 0){
				//this.minutes = 0;
				this.calculateTime();
				this.stop();
				this.isNotifying = true;
				if(Push.default.Permission.has()){
					Push.default.create("It's time to!", {
						body: this.message,
						icon: 'assets/pomodoro-digital.png',
						timeout: 4000,
						vibrate: [200, 100, 200, 100, 200, 100, 200],
						onClick: function () {
							window.focus();
							this.close();
						}
					});					
				}
			}
		}
		this.refresh();
	}
	attributeChanged( attrName, oldVal, newVal ){
		if(attrName !== "isControlVisible"){
			this.setCookie(`configured-${attrName.toLowerCase()}`,newVal,90);
		} 		
	}
	attached(){
		this.start();
		//not ask for permision any time to user
		if(!Push.default.Permission.has() || Push.default.Permission.get() ==! Push.default.Permission.DENIED){
			Push.Permission.request(() => {});
		}		
	}
	detached(){
		this.stop();	
	}
	reStart(){
		this.isNotifying = false;
		this.start();
	}
	stop(){
		if(this.intervalId){
			clearInterval(this.intervalId);
		}	
	}
	start(){
		this.stop();
		if(this.getCookie('configured-minutes')){
			this.configuredMinutes = Number(this.getCookie('configured-minutes'));
		}
		if(this.getCookie('configured-primarycolor')){
			this.primaryColor = this.getCookie('configured-primarycolor');
		}
		if(this.getCookie('configured-secondarycolor')){
			this.secondaryColor = this.getCookie('configured-secondarycolor');
		}
		if(this.getCookie('configured-message')){
			this.message = this.getCookie('configured-message');
		}
		this.calculateTime();
		this.intervalId = setInterval(this.decrementTime.bind(this),1000);
	}
	setCookie(cname, cvalue, exdays) {
		let d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		let expires = "expires="+ d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
}