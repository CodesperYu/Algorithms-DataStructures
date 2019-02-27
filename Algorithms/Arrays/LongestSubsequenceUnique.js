let longestUniqueSub = (arr) => {
	let hash = {};
	let size = 0;
	let p = 0;
	let largest = 0;
	for (let i = 0; i < arr.length; i++) {
		let letter = arr[i];
		if (!hash[letter]) {
			hash[letter] = true;
			size++;
		} else {
			while(arr[p] !== letter) {
				size--;
				delete hash[arr[p]];
				p++;
			}
			p++;
		}
		largest = Math.max(size, largest);
	}
	return size;
}

let test1 = 'abcdefabcdefg' //7
let test2 = 'asokaspafs'    //4

console.log(longestUniqueSub(test2));
