let jobScheduler = (f, n, message) => {
	setTimeout(() => f(message), n);
	return;
};

let sendMessage = (message) => {
	console.log(message);
}

console.log(jobScheduler(sendMessage, 1000, 'hello'));