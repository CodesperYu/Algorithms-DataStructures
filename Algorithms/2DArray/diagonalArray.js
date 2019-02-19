let diagonalTraversal = (arr) => {

	//0,0
	//1,0 0,1
	//2,0  1,1 0,2

	//2,1 1,2
	//2,2

	//0,0
	//1,0 0,1
	//2,0, 1,1 0,2
	//2,1 1,2 0,3
	//2,2 1,3 0,4
	//2,3 1.4
	//2,4

	//0,0
	//

	if (!arr.length) {
		return null;
	}

	let row = arr.length;
	let col = arr[0].length

	let sol = [];

	//largest single loop is based on row height
	for (let rStart = 0; rStart < row; rStart++) {
		let r = rStart;
		let c = 0;
		while(arr[r] && arr[r][c]) {
			sol.push(arr[r][c]);
			r--;
			c++;
		}
	}
	for (let cStart = 1; cStart < col; cStart++) {
		let c = cStart;
		let r = row-1;
		while(arr[r] && arr[r][c]) {
			sol.push(arr[r][c]);
			r--;
			c++;
		}
	}
	console.log(sol);
}

let arr = [
						[1,2,3],
						[4,5,6],
						[7,8,9]
					]
let arr2 = [
						[1,2,3,4,5],
						[6,7,8,9,10],
						[11,12,13,14]
					]
let arr4 = [
						[1,2,3],
						[4,5,6],
						[7,8,9],
						[10,11,12]
					]

let arr3 = [
						[0]
					]

console.log(diagonalTraversal([]));
