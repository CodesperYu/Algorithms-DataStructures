var combinationSum = function(candidates, target) {
	let combo = [];
	let sumHelper = (sum, val, pos) => {
			if (val === target) {
					combo.push(sum);
			} else if (val > target) {
					return;
			} else {
					for (let i = pos; i < candidates.length; i++) {
							sumHelper(sum.concat([candidates[i]]), val+candidates[i], i);
					}
			}
	};
	sumHelper([], 0, 0);
	return combo;
};