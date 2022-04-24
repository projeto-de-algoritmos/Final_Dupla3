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

export default {
    generateNodes, staticMap
}