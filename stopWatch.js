let second = 0,
	minute = 0,
	hour = 0,
	secDigit = null,
	minDigit = null,
	hourDigit = null;
let interval = setInterval(timer, 1000);

function timer() {
	second++;
	if (second >= 60) {
		second = 0;
		minute++;

		if (minute >= 60) {
			minute = 0;
			hour++;
		}
	}

	if (second < 10) {
		secDigit = `0${second}`;
	} else {
		secDigit = second;
	}
	if (minute < 10) {
		minDigit = `0${minute}`;
	} else {
		minDigit = minute;
	}
	if (hour < 10) {
		hourDigit = `0${hour}`;
	} else {
		hourDigit = hour;
	}
	if (hour === 6) {
		clearInterval(interval);
	}
	//console.log(`${hourDigit}hr:${minDigit}min:${secDigit}sec`);
}
