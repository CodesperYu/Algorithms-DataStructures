var combinationSum2 = function(candidates, target) {
	candidates.sort((a,b) => {
			return a-b;
	});
	let sol = [];
	let sumHelper = (set, sum, index) => {
			for(let i = index; i < candidates.length; i++) {
					if (sum + candidates[i] === target) {
							sol.push(set.concat(candidates[i]));
					} else if (sum > target) {
							return;
					} else {
							sumHelper(set.concat([candidates[i]]), sum + candidates[i], i + 1 );
					}
					while (candidates[i] === candidates[i+1]) {i++}
			}
	}
	sumHelper([], 0, 0);
	return sol;
};