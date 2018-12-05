/*Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation --
it essentially peek() at the element that will be returned by the next call to next().

Example:

Assume that the iterator is initialized to the beginning of the list: [1,2,3].

Call next() gets you 1, the first element in the list.
Now you call peek() and it returns 2, the next element. Calling next() after that still return 2. 
You call next() the final time and it returns 3, the last element. 
Calling hasNext() after that should return false.
Follow up: How would you extend your design to be generic and work with all types, not just integer?

# Your PeekingIterator object will be instantiated and called as such:
# iter = PeekingIterator(Iterator(nums))
# while iter.hasNext():
#     val = iter.peek()   # Get the next element but not advance the iterator.
#     iter.next()         # Should return the same value as [val].
*/

class PeekingIterator {
	constructor(nums){
		this.arr = nums;
		this.curr = 0;
		this.length = nums.length;
	}
	//next
	//returns the current value and iterates to the next
	next(){
		let returnVal = this.arr[this.curr];
		this.curr++;
		return returnVal;
	}

	//hasNext
	hasNext(){
		return this.curr < this.length;
	}

	//peek
	peek(){
		return this.arr[this.curr+1] ? this.arr[this.curr+1] : null;
	}

}

let iter = new PeekingIterator([1,2,3,4,5]);

while (iter.hasNext()) {
	let val = iter.peek() //get element but not advance
	console.log('val ' + val);
	console.log('next ' + iter.next()) //show all the next values;
}
