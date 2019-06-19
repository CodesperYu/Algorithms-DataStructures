var findMinHeightTrees = function(n, edges) {
	if (!n || n === 0 || n - 1 !== edges.length) return [];
	if (n === 1) return [0];
	
	const adjacencies = {};
	let degrees = [];
	let leafList = [];
	let results = [];
	edges.forEach(edge => {
			let v1 = edge[0];
			let v2 = edge[1];
			adjacencies[v1] = adjacencies[v1] ? adjacencies[v1].concat([v2]) : [v2];
			adjacencies[v2] = adjacencies[v2] ? adjacencies[v2].concat([v1]) : [v1];
	});
	
	degrees = generateDegreesList(n, adjacencies);
	leafList = generateLeafList(degrees)
	
	while (n > 2) {
			n -= (leafList.length);
			removeLeaves(adjacencies, degrees, leafList);
			leafList = generateLeafList(degrees);
	}
	
	degrees.forEach((degree, i) => {
			if (degree > 0) {
					results.push(i);
			}
	});
	return results;
};

function removeLeaves(adjacencies, degrees, leafList) {
	leafList.forEach(leaf => {
			let currNodeAdjs = adjacencies[leaf];
			currNodeAdjs.forEach(adj => {
					degrees[leaf]--;
					if (degrees[adj] !== 1) {
							degrees[adj]--;
					}
			})
	});
}

function generateLeafList(degrees) {
	let list = []
	degrees.forEach((degree, i) => {
		 if (degree === 1) {
				 list.push(i);
		 }
	});
	return list;
}

function generateDegreesList(n, adjacencies) {
	let list = [];
	for (let i = 0; i < n; i++) {
			list[i] = adjacencies[i].length;
	}
	return list;
}