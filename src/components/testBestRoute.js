const minorDistances = [13, 14, 19];

const bestValue = 60;
const totalWeight = 32;

const bestFoods = [
    {
        totalLife: 11,
        totalWeight: 19,
        selectedFoods: [
            {
                link: 'https://static.wikia.nocookie.net/dont-starve-game/images/6/66/Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151522',
                name: 'Aloe',
                life: 8,
                weight: 7
            },
            {
                link: 'https://static.wikia.nocookie.net/dont-starve-game/images/4/45/Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151522',
                name: 'Asparagus',
                life: 3,
                weight: 12
            }
        ],
    },
    {
        totalLife: 16,
        totalWeight: 14,
        selectedFoods: [
            {
                link: 'https://static.wikia.nocookie.net/dont-starve-game/images/6/66/Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151522',
                name: 'Aloe',
                life: 8,
                weight: 7
            },
            {
                link: 'https://static.wikia.nocookie.net/dont-starve-game/images/6/66/Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151522',
                name: 'Aloe',
                life: 8,
                weight: 7
            }
        ],
    },
    {
        totalLife: 11,
        totalWeight: 19,
        selectedFoods: [

            {
                link: 'https://static.wikia.nocookie.net/dont-starve-game/images/6/66/Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151522',
                name: 'Aloe',
                life: 8,
                weight: 7
            },
            {
                link: 'https://static.wikia.nocookie.net/dont-starve-game/images/4/45/Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151522',
                name: 'Asparagus',
                life: 3,
                weight: 12
            }
        ],
    },
]

const relationKmLife = (distance, life) => {

    // 1 vida equivale a 5km, então precisamos encontrar a maior real_km.
    const possible_km = 5 * life;
    const real_km = possible_km - distance;

    // console.log(possible_km + " - " + distance + " = " + real_km);

    return real_km;
}

const findBestRoute = (minorDistances, bestFoodPerRegion) => {
    let bestRelation = -1000;
    let bestChoice = {};

    for (let i = 0; i < minorDistances.length; i++) {

        const relation = relationKmLife(minorDistances[i], bestFoodPerRegion[i].totalLife);

        if (relation > bestRelation) {
            bestRelation = relation;
            bestChoice = {
                bestRelation,
                totalWeight: bestFoodPerRegion[i].totalWeight,
                totalLife: bestFoodPerRegion[i].totalLife,
                selectedFoods: bestFoodPerRegion[i].selectedFoods,
            }
        }
    }
    return bestChoice;

}

const f = findBestRoute(minorDistances, bestFoods)

console.log(f)
