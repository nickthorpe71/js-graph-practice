const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes = [
	['PHX', 'LAX'],
	['PHX', 'JFK'],
	['JFK', 'OKC'],
	['JFK', 'HEL'],
	['JFK', 'LOS'],
	['MEX', 'LAX'],
	['MEX', 'BKK'],
	['MEX', 'LIM'],
	['MEX', 'EZE'],
	['LIM', 'BKK'],
];

// the graph
const adjacencyList = new Map();

function addNode(airport){
	adjacencyList.set(airport, []);
}

function addEdge(origin, destination){
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

// populate the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

// BFS Breadth First Search

function bfs(start){
	const visited = new Set();

	const queue = [start]
	
	while (queue.length > 0){
		const airport = queue.shift(); // mustates the queue
		const destinations = adjacencyList.get(airport);
		
		for(const destination of destinations){

			if(destination === 'BKK'){
				console.log('found it!');
			}
			
			if(visited.has(destination)){
				vistied.add(destination);
				queue.push(destination);
			}
		}
	}
}

bfs('PHX');

