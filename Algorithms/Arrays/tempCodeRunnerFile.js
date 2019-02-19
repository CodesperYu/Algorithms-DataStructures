let addCarrotPaths = (r, c, arr, carrots) => {
// 	//add the middle value into queue
// 	let stack = [];
// 	stack.push([r,c]);
// 	//add carrot, change to zero, find next largest
// 	while(stack.length > 0) {
// 		let carrotVal = stack.pop();
// 		r = carrotVal[0];
// 		c = carrotVal[1];
// 		carrots += arr[r][c];
// 		arr[r][c] = 0;
// 		let next = largestCarrotPath(r, c, arr);
// 		if (next) {
// 			stack.push(next);
// 		}
// 	}
// 	return carrots;
// }