reverseList = (list) => {
	let point = list;
	let prev = null;
	console.log(list);
	while (point) {
		//save the next val;
		let save = point.next;
		//attach it to the previous value, to delete the tail, and connect it to the left value
		point.next = prev;
		//change the list;
		prev = point;
		//add next pointer
		point = save;
	}
	
	return prev;
};



module.exports = reverseList;