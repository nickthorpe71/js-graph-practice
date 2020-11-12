const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

// the graph
const adjacencyList = new Map();

function addNoce(airport){
	adjacencyList.set(airport, []);
}

function addEdge(origin, destination){
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}
