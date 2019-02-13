let countArrangement = function(N) {
	let count = 0;
	let visited = [];
	let backTracker = function(outer) {
			if (outer > N) {
					count++;
					return;
			}
			
			for (let i = 1; i <= N; i++) {
					if (visited) continue;
					if (i % outer !== 0 && outer % i !== 0) continue;
					visited[i] = true;
					backTracker(outer + 1);
					visited[i] = false
			}
	}; 
	backTracker(1);
	return count;
};

