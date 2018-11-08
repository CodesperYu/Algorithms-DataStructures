/*
Given an unsorted array of integers arr and a number s, 
write a function findArrayQuadruplet that finds four numbers 
(quadruplet) in arr that sum up to s. Your function 
should return an array of these numbers in an ascending order. 
If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. 
You’re asked to return the first one you encounter 
(considering the results are sorted).

Explain and code the most efficient solution possible, 
and analyze its time and space complexities.
*/

arrayQuadruplet = (arr, sum) => {
	if (arr.length < 4) {
		return [];
	}
	arr.sort((a, b) => {
		return a-b;
	});

	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			let first = arr[i];
			let second = arr[j];
			let firstSum = first + second;
			let leftOver = sum - firstSum;
			let p1 = j+1;
			let p2 = arr.length - 1;
			while (p1 < p2) {
				sum1 = arr[p1];
				sum2 = arr[p2];
				let secondSum = sum1 + sum2;
				if (secondSum < leftOver){
					p1++;
				} else if (secondSum > leftOver) {
					p2--;
				} else {
					return [first, second, arr[p1], arr[p2]]
				}
			}
		}
	}
	return [];
}

module.exports = arrayQuadruplet;