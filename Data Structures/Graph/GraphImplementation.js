// create a graph class
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  // Prints the vertex and adjacency list
  printGraph() {
    // get all the vertices
    const getKeys = this.AdjList.keys();

    // iterate over the vertices
    for (const i of getKeys) {
      const getValues = this.AdjList.get(i);
      let conc = '';

      // iterate over the adjacency list and concatenate the values into a string
      for (const j of getValues) { conc += `${j} `; }

      // print the vertex and its adjacency list
      console.log(`${i} -> ${conc}`);
    }
  }

  // bfs(v)
  // function to performs BFS
  bfs(startingNode) {
    // create a visited array
    const visited = [];
    for (let i = 0; i < this.noOfVertices; i++) { visited[i] = false; }

    // Create an object for queue
    const q = [];

    // add the starting node to the queue
    visited[startingNode] = true;
    q.push(startingNode);

    // loop until queue is element
    while (q.length) {
      // get the element from the queue
      const getQueueElement = q.shift();

      // passing the current vertex to callback funtion
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      const getList = this.AdjList.get(getQueueElement);

      // loop through the list and add the elemnet to the
      // queue if it is not processed yet
      for (const i in getList) {
        const neigh = getList[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(neigh);
        }
      }
    }
  }

  // dfs(v)
  dfs(startNode) {
    const visited = new Map();
    const stack = [startNode];
    while (stack.length) {
      const curr = stack.pop();
      const neighbors = this.AdjList.get(curr);
      if (!visited.has(curr)) {
        visited.set(curr, true);
        console.log(curr);
        neighbors.forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            stack.push(neighbor);
          }
        });
      }
    }
  }
  //   dfs(startingNode) {
  //     const visited = [];
  //     for (let i = 0; i < this.noOfVertices; i++) { visited[i] = false; }

  //     this.DFSUtil(startingNode, visited);
  //   }

  //   // Recursive function which process and explore
  //   // all the adjacent vertex of the vertex with which it is called
  //   DFSUtil(vert, visited) {
  //     visited[vert] = true;
  //     console.log(vert);

  //     const getNeighbours = this.AdjList.get(vert);

//     for (const i in getNeighbours) {
//       const getElem = getNeighbours[i];
//       if (!visited[getElem]) { this.DFSUtil(getElem, visited); }
//     }
//   }
}

const g = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();

console.log('BFS');
g.bfs('A');

console.log('DFS');
g.dfs('A');
