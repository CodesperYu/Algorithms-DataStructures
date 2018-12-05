const LIS = (arr) => {
  let track = new Array(arr.length).fill(1);
  let largest = 1;
	let largestIndex = 0;
	let results = null;
	let answer = [];

	// loop through to see what's the longest sequence at each point
  for (let j = 1; j < arr.length; j++) {
    for (let i = 0; i < j; i++) {
      if (arr[i] < arr[j]) {

        if (track[j] <= track[i]) {
          track[j] = track[i]+1;
				}
				
				largest = Math.max(largest, track[j]);
				
        if (track[j] === largest) {
          largest = track[j];
          largestIndex = j;
        }
      }
    }
	}
	
	results = [largestIndex];
	
  for (let i = largestIndex - 1; i >= 0; i--) {
    if (track[i]+1 === track[results[results.length-1]]) {
      results.push(i);
    }
  }
  
  for (let i = results.length - 1; i >= 0; i--) {
    let index = results[i];
    answer.push(arr[index]);
  }
  return answer;
};

module.exports = LIS;