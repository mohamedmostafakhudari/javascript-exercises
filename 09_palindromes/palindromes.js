const palindromes = function (str) {
	const editedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	return editedString.split("").reverse().join("") === editedString;
};
palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
