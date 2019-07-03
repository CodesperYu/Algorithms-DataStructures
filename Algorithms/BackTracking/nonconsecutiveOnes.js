function nonconsecutiveOnes(n) {
	let results = [];
	
	function helper(str) {
		if (str.length === n) {
			results.push(str);
			return;
		}
		for (let i = 0; i < 2; i++) {
			let numStr = i.toString();
			if (str[str.length - 1] === '1' && numStr === '1') {
				return;
			}
			helper(str + numStr);
		}
	}
	helper('');
	return results;
}

console.log(nonconsecutiveOnes(4));