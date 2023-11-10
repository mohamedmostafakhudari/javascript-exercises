const removeFromArray = function (array, ...removables) {
	return array.filter((item) => !removables.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
