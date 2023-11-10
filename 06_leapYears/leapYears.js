// The equation works as follows:
// divide the year by 4
// if it is fully divisible by 4, it is a leap year
// But Century years need to be divided by 400 to be a leap year
const leapYears = function (year) {
	if (isCenturyYear(year)) {
		return year % 400 === 0;
	} else {
		return year % 4 === 0;
	}
	function isCenturyYear(year) {
		return year % 100 === 0;
	}
};

// Do not edit below this line
module.exports = leapYears;
