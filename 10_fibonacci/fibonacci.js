const fibMap = new Map();
const fibonacci = function (x) {
	if (+x < 0) {
		return "OOPS";
	}
	if (+x < 2) {
		return +x;
	}
	if (fibMap.has(x)) {
		return fibMap.get(x);
	}
	let fib0 = fibonacci(x - 2);
	let fib1 = fibonacci(x - 1);
	fibMap.set(x, fib0 + fib1);
	return fib0 + fib1;
};

// Do not edit below this line
module.exports = fibonacci;
