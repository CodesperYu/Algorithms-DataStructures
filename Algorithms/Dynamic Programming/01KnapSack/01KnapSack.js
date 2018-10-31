
/*  Given weights and values of n items, put these 
 items in a knapsack of capacity W to get the maximum total value in the
 knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] 
 which represent values and weights associated with n items respectively. Also 
 given an integer W which represents knapsack capacity, find out the maximum value subset 
 of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break 
 an item, either pick the complete item, or don’t pick it (0-1 property).
 */

knapsack = (capacity, items) => {
	let iLength = items.length;

	//array('length') would create an array with empty slots of that length
	//.fill('some value') fill each slots with 'some value'
	//then we do that map(() => would change each 'some value'
	//in the => Array(capacity+1) would add an array of another size to replace the 'some values'

	let memo = Array(iLength+1).fill(0).map(()=> Array(capacity+1).fill(0));
	console.log(memo);
  for (let y = 1; y <= iLength; y++) {
    for (let x = 1; x <= capacity; x++) {

			//if item is smaller than current capacity, there is potential it can be included in the solution
			
      if (items[y-1][0] <= x) {

			//if if we add it, what is the largest remaining value leftover that can be added from the previous, and compare which is larger
			
				memo[y][x] = Math.max(items[y-1][1] + memo[y-1][x-items[y-1][0]], memo[y-1][x]);
				
      } else {

			//if it's not larger, the largest value is just the value on top of it
			
				memo[y][x] = memo[y-1][x];
				
      }
    }
  }
  return memo[iLength][capacity];
};

module.exports = knapsack;