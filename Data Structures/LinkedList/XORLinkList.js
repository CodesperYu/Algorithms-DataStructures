class XorLinkList {
	constructor(val) {
		this.val = val;
		this.XOR = null;
	}

	add(val) {
		let node = { val };

		let currentNode = this;
		while (this.XOR) {
			currentNode = this.XOR;
		}



	}

	get(target) {

	}

}

let list = new XorLinkList(3);
list.add(2);