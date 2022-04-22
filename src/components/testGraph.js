const printGraph = (graph) => {
    const vertices = graph.keys();
    let finalGraph = "";

    for (let i of vertices) {
        const nodes = graph.get(i);
        let conc = "";

        for (let j of nodes) {
            conc += j.link + " (Distancia-> " + j.distance + ") | ";
        }
        finalGraph += "Vértice " + i + " -> Vizinhos: " + conc + "\n";
    }
    return finalGraph;
}

const createGraph = () => {
    return new Map()
}

const generateNodes = (graph) => {
    const qtd = 12;
    const nodes = [];
    for (let i = 0; i <= qtd; i++) {
        graph.set(i, []);
        nodes.push({ id: i });
    }
    return nodes;
}

const addLink = (graph, source, node, distance) => {
    graph.get(source).push({ link: node, distance });
    graph.get(node).push({ link: source, distance });
}

const setDistance = (graph, source, node, distance) => {
    graph.get(source).find(x => x.link === node).distance = distance;
    graph.get(node).find(x => x.link === source).distance = distance;
}

const randomDistance = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const staticMap = (graph) => {
    // Constroe o mapa estático com seus nós já conectados, com distância nula
    addLink(graph, 0, 1, 0);
    addLink(graph, 0, 8, 0);
    addLink(graph, 0, 4, 0);
    addLink(graph, 1, 2, 0);
    addLink(graph, 1, 3, 0);
    addLink(graph, 2, 3, 0);
    addLink(graph, 3, 6, 0);
    addLink(graph, 4, 5, 0);
    addLink(graph, 4, 6, 0);
    addLink(graph, 5, 10, 0);
    addLink(graph, 6, 7, 0);
    addLink(graph, 7, 5, 0);
    addLink(graph, 8, 9, 0);
    addLink(graph, 8, 12, 0);
    addLink(graph, 9, 10, 0);
    addLink(graph, 9, 11, 0);
    addLink(graph, 10, 11, 0);
    addLink(graph, 12, 11, 0);
    addLink(graph, 12, 2, 0);

}

const generateDistances = (graph, qtd) => {
    // gera as distâncias aleatórias para os nós já pré definidos
    setDistance(graph, 0, 1, randomDistance(1, qtd));
    setDistance(graph, 0, 8, randomDistance(1, qtd));
    setDistance(graph, 0, 4, randomDistance(1, qtd));
    setDistance(graph, 1, 2, randomDistance(1, qtd));
    setDistance(graph, 1, 3, randomDistance(1, qtd));
    setDistance(graph, 2, 3, randomDistance(1, qtd));
    setDistance(graph, 3, 6, randomDistance(1, qtd));
    setDistance(graph, 4, 5, randomDistance(1, qtd));
    setDistance(graph, 4, 6, randomDistance(1, qtd));
    setDistance(graph, 5, 10, randomDistance(1, qtd));
    setDistance(graph, 6, 7, randomDistance(1, qtd));
    setDistance(graph, 7, 5, randomDistance(1, qtd));
    setDistance(graph, 8, 9, randomDistance(1, qtd));
    setDistance(graph, 8, 12, randomDistance(1, qtd));
    setDistance(graph, 9, 10, randomDistance(1, qtd));
    setDistance(graph, 9, 11, randomDistance(1, qtd));
    setDistance(graph, 10, 11, randomDistance(1, qtd));
    setDistance(graph, 12, 11, randomDistance(1, qtd));
    setDistance(graph, 12, 2, randomDistance(1, qtd));
}


const createPriorityQueue = () => {
    return [];
}

const enqueue = (pqueue, element, price) => {
    let exists = false;

    for (let i = 0; i < pqueue.length; i++) {
        if (pqueue[i].price > price) {
            pqueue.splice(i, 0, { element, price })
            exists = true;
            break;
        }
    }

    if (!exists) pqueue.push({ element, price })

}

const dequeue = (pqueue) => {
    if (!pqueue.length) throw "Is Empty!"

    return pqueue.shift()
}

const djikstraAlgorithm = (graph, startNode, endNode) => {
    let prices = {};
    let prevNode = {};
    const queue = createPriorityQueue();
    const startNodes = graph.get(startNode);

    prices[startNode] = 0;
    enqueue(queue, startNode, 0);

    const vertices = graph.keys();
    for (let vert of vertices) {
        if (vert !== startNode) prices[vert] = Infinity;
        prevNode[vert] = null;
    }

    while (queue.length) {
        let minNode = dequeue(queue);
        let currNode = minNode.element;

        const nodes = graph.get(currNode);

        if (!startNodes.length) return "Sem caminho utilizando esse nó inicial";

        for (let node of nodes) {
            const sumPrice = prices[currNode] + node.distance;

            if (sumPrice < prices[node.link]) {
                prevNode[node.link] = currNode;
                prices[node.link] = sumPrice;
                enqueue(queue, node.link, prices[node.link])
            }
        }

    }
    if (prices[endNode] === Infinity) return "Não é possível formar caminho até o nó final"
    else {
        return prices[endNode]
    }

}

const tableDistances = (graph) => {
    const distances = []
    for (let i = 1; i <= 12; i++) {
        const distance = djikstraAlgorithm(graph, 0, i);
        distances.push(distance);
    }
    return distances;

}

const g = createGraph();
const nodes = generateNodes(g);

staticMap(g)
//addLink(g, 0, 1, 0);
//setDistance(g, 0, 1, 1);

generateDistances(g, 15);
console.log(printGraph(g));

console.log('----------------------------------------------')
const distances = tableDistances(g);
console.log(distances);
