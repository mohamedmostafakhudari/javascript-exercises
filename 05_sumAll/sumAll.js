const sumAll = function (start, end) {
	const errorCases = [!Number.isInteger(start), !Number.isInteger(end), start < 0, end < 0];
	if (errorCases.includes(true)) return "ERROR";
	let result = 0;
	for (let currentNumber = Math.min(start, end); currentNumber <= Math.max(start, end); currentNumber++) {
		result += currentNumber;
	}
	return result;
};

// Do not edit below this line
module.exports = sumAll;
