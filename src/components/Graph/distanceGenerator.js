// Gerador de Distâncias Aleatórias

const randomDistance = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const setDistance = (graph, source, node, distance) => {
    graph.get(source).find(x => x.link === node).distance = distance;
    graph.get(node).find(x => x.link === source).distance = distance;
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

export default generateDistances;