class ListNode {
	constructor(key, val) {
		this.key = key;
		this.value = val;
		this.prev = this.next = null;
	}
}

class LRUCache {
	constructor(capacity) {
		this.size = 0;
		this.nodes = {};
		this.capacity = capacity;
		this.head = null;
		this.tail = null
	}

	addHead(node) {
		//make this node's next to what was the previous head
		node.next = this.head;
		node.prev = null;

		//if head exists, then make prev head equal to curr head
		if (this.head !== null) {
			this.head.prev = node;
		}
		this.head = node;

		//if tail does not exist, set tail to this node
		if (this.tail === null) {
			this.tail = node;
		}

		//increase size, and add this node into the map
		this.size++;
		this.nodes[node.key] = node
	}
	
	put(key, value) {
		let node = new ListNode(key, value);
		//if the key exists already, then change that tbalue to this value and remove
		//the previous key
		if (this.nodes[key]) {
			this.nodes[key].value = node.value;
			this.remove(node.key);
		} else {
			//if does not exist, delete the tail
			if (this.size >= this.capacity) {
				delete this.nodes[this.tail.key];
				this.size--;
				this.tail = this.tail.prev;
				this.tail.next = null;
			}
		}
		this.addHead(node);
	}

	remove(key) {
		let node = this.nodes[key];
		if (node.prev !== null) {
			node.prev.next = node.next;
		} else {
			this.head = node.next;
		}
		if (node.next !== null) {
			node.next.prev = node.prev
		} else {
			this.tail = node.prev;
		}
		delete this.nodes[key];
		this.size--;
	}
	
	get(key) {
		if (this.nodes[key]) {
			let value = this.nodes[key].value;
			var node = new ListNode(key, value);
			this.remove(key);
			this.addHead(node);
			return value;
		} else {
			return -1;
		}
	}
}

let cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4