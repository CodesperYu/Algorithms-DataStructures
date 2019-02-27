var maxSubArray = function(nums) {
	if (!nums.length) return 0;
	
	let prevLargest = nums[0];
	let largest = nums[0];
	
	for (let i = 1; i < nums.length; i++) {
			let currVal = nums[i];
			prevLargest = Math.max(currVal, prevLargest + currVal);
			largest = Math.max(prevLargest, largest);
	}
	
	return largest;
};

let test1 = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(test1));