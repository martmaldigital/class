let seconds = 0,
	minutes = 0,
	hours = 0,
	secDigit = null,
	minDigit = null,
	hourDigit = null;
let interval = setInterval(timer, 1000);

function timer() {
	seconds++;
	if (seconds >= 60) {
		seconds = 0;
		minutes++;

		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}

	if (seconds < 10) {
		secDigit = `0${seconds}`;
	} else {
		secDigit = seconds;
	}
	if (minutes < 10) {
		minDigit = `0${minutes}`;
	} else {
		minDigit = minutes;
	}
	if (hours < 10) {
		hourDigit = `0${hours}`;
	} else {
		hourDigit = hours;
	}
	if (hours === 6) {
		clearInterval(interval);
	}
	//console.log(`${hourDigit}Hrs:${minDigit}Mins:${secDigit}Secs`);
}
