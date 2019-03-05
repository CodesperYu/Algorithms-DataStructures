function storage(nest, name) {
	//resolve is a function that will return the success value;
	return new Promise(resolve => {
		nest(name, result => resolve(result));
	});
}

function bigOak(string) {
	setTimeout(() => console.log(string), 5000);
	return string;
}
storage(bigOak, "enemies").then(value => console.log("Got", value));