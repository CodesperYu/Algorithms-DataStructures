/*
Given a distance of k and an array of distinct integers, 
find a count of all pairs that of k distance from
each other
*/

distanceOfK = (arr) => {
	let count = 0
	let mem = {};
	arr.forEach((value) => {
		let low = value - 2;
		let high = value + 2;

		if (mem.hasOwnProperty(low)) {
			count++;
		}

		if(mem.hasOwnProperty(high)) {
			count++;
		}

		mem[value] = true;

	});

	return count;
	
};


module.exports = distanceOfK;

