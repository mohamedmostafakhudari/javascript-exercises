const findTheOldest = function (people) {
	return people.reduce((oldest, curr) => {
		if (!Object.keys(oldest).length) {
			return curr;
		}

		const currAge = (curr?.yearOfDeath || new Date().getFullYear()) - curr.yearOfBirth;
		const oldestAge = (oldest?.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;

		return currAge > oldestAge ? curr : oldest;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
