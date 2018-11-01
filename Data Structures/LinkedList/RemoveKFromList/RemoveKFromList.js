removeK = (list, k) =>{
	if (!list.value) {
		return [];
	}

	let pointer = list;
	let prev = null;

	while(pointer) {
		if (pointer.value === k) {
			if (!prev) {
				//reset values if first value === k
				list = list.next;
				pointer = list;
			} else {
				//if not, set the prev to connect to the current value's next;
				prev.next = pointer.next;
				pointer = pointer.next;
			}
		} else {
			//else, move pointer and prev one step
			prev = pointer;
			pointer = pointer.next;
		}
	}
	//we kept list pointer from the top, so we return the list;
	return list;
	
}

module.exports = removeK;