let cons = (a,b) => {
	pair = (f) => {
		return f(a,b);
	}
	return pair;
}

let car = (fun) => {
	return fun((a, b) => {
		return a;
	});
}

let cdr = (fun) => {
	let last = (a, b) => {
		return b;
	}
	return fun(last);
}

// console.log(cons(3,4));
console.log(cdr(cons(3,4)));
 