setTimeout(() => {
  document.getElementById('loading').style.display = "none";
  document.getElementById('stopwatch').style.display = "block";
}, 2000);

function stopWatch() {
	if (timer) {
		count++;
		if (count == 100) {
			second++;
			count = 0;
		}
		if (second == 60) {
			minute++;
			second = 0;
		}
		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}
		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;
		if (hour < 10) {
			hrString = "0" + hrString;
		}
		if (minute < 10) {
			minString = "0" + minString;
		}
		if (second < 10) {
			secString = "0" + secString;
		}
		if (count < 10) {
			countString = "0" + countString;
		}
    document.getElementById('counter').value = `${hrString}:${minString}:${secString}:${countString}`;
		setTimeout(stopWatch, 10);
	}
}
