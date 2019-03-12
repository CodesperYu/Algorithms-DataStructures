// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor (noOfVertices) {
    this.noOfVertices = noOfVertices
    this.AdjList = new Map()
  }

  // functions to be implemented

  // addVertex(v)

  addVertex (v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, [])
  }
  // addEdge(v, w)
  addEdge (v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge betweeen v and w
    this.AdjList.get(v).push(w)

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v)
  }
  // Prints the vertex and adjacency list
  printGraph () {
    // get all the vertices
    var getKeys = this.AdjList.keys()

    // iterate over the vertices
    for (var i of getKeys) {
      // great the corresponding adjacency list
      // for the vertex
      var getValues = this.AdjList.get(i)
      var conc = ''

      // iterate over the adjacency list
      // concatenate the values into a string
      for (var j of getValues) { conc += j + ' ' }

      // print the vertex and its adjacency list
      console.log(i + ' -> ' + conc)
    }
  }
  // bfs(v)
  // function to performs BFS
  bfs (startingNode) {
    // create a visited array
    var visited = []
    for (var i = 0; i < this.noOfVertices; i++) { visited[i] = false }

    // Create an object for queue
    var q = []

    // add the starting node to the queue
    visited[startingNode] = true
    q.push(startingNode)

    // loop until queue is element
    while (q.length) {
      // get the element from the queue
      var getQueueElement = q.shift()

      // passing the current vertex to callback funtion
      console.log(getQueueElement)

      // get the adjacent list for current vertex
      var getList = this.AdjList.get(getQueueElement)

      // loop through the list and add the elemnet to the
      // queue if it is not processed yet
      for (let i in getList) {
        var neigh = getList[i]

        if (!visited[neigh]) {
          visited[neigh] = true
          q.push(neigh)
        }
      }
    }
  }
  // dfs(v)
  dfs (startingNode) {
    var visited = []
    for (var i = 0; i < this.noOfVertices; i++) { visited[i] = false }

    this.DFSUtil(startingNode, visited)
  }

  // Recursive function which process and explore
  // all the adjacent vertex of the vertex with which it is called
  DFSUtil (vert, visited) {
    visited[vert] = true
    console.log(vert)

    var getNeighbours = this.AdjList.get(vert)

    for (var i in getNeighbours) {
      var getElem = getNeighbours[i]
      if (!visited[getElem]) { this.DFSUtil(getElem, visited) }
    }
  }
}

var g = new Graph(6)
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i])
}

// adding edges
g.addEdge('A', 'B')
g.addEdge('A', 'D')
g.addEdge('A', 'E')
g.addEdge('B', 'C')
g.addEdge('D', 'E')
g.addEdge('E', 'F')
g.addEdge('E', 'C')
g.addEdge('C', 'F')

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph()

console.log('BFS')
g.bfs('A')

console.log('DFS')
g.dfs('A')
