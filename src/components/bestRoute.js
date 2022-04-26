const relationKmLife = (distance, life) => {

    // 1 vida equivale a 5km, então precisamos encontrar a maior real_km.
    const possible_km = 5 * life;
    const real_km = possible_km - distance;

    return real_km;
}

const findBestRoute = (minorDistances, bestFoodsPerRegion) => {
    let bestRelation = -1000;
    let bestChoice = {};

    for (let i = 0; i < minorDistances.length; i++) {

        const relation = relationKmLife(minorDistances[i], bestFoodsPerRegion[i].totalLife);

        if (relation > bestRelation) {
            bestRelation = relation;
            bestChoice = {
                bestRelation,
                totalWeight: bestFoodsPerRegion[i].totalWeight,
                totalLife: bestFoodsPerRegion[i].totalLife,
                selectedFoods: bestFoodsPerRegion[i].selectedFoods,
                distance: minorDistances[i],
                region: i + 1,
            }
        }
    }
    return bestChoice;

}

export default { findBestRoute };

/*
Função final, pega as distancias e as melhores comidas por região.
Faz um relativo da vida e distancia e retorna a melhor opção para o jogador
É a resposta final do problema :)
*/