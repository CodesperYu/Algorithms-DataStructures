// Given a query string s and a set of all possible query strings, return all strings in the set that have a s as a prefix

class Trie {
	constructor() {
		this.trie = {}
	}

	insert(text) {
		let trie = this.trie;
		for (let i = 0; i < text.length; i++) {
			char = text[i];
			if (!trie[char]) {
				trie[char] = {};
			}
			trie = trie[char];
		}
		trie[endHere] = true;
	}
	valWithPrefix(prefix) {
		let d = trie;
		for (let i = 0; i < prefix.length; i++) {
			let char = prefix[i];
			if (d[char]) {
				d = d[char];
			} else {
				return [];
			}
		}
		return this.matchingWords(d)
	}
	matchingWords(d) {
		result = [];
		for (let props in d) {
			console.log(props);
			if (d[props][endHere]) {
				let subResult = ['']
			} else {
				
			}
		}
	}
}