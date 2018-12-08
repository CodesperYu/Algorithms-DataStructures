var reverseWords = function(str) {
	let allStr = [];
	let currStr = '';
	for (let i = 0; i < str.length; i++) {
			let letter = str[i];
			console.log(i+2);
			if (letter !== ' ') {
					currStr = currStr + letter;
			} else if (currStr.length > 0 || str.length <= i + 2) {
					allStr.push(currStr);
					currStr = '';
			}
	}
	console.log(allStr);
	return allStr === ' ' ? '' : allStr.reverse().join(' ');
	// return str.split(" ").reverse().filter(function(v){return v}).join(" ");
};
