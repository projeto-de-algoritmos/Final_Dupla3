const characters = [
    {
        "name": "Wilson",
        "bag": 30
    },
    {
        "name": "Willow",
        "bag": 150
    },
    {
        "name": "Wolfgang",
        "bag": 300
    },
    {
        "name": "Wendy",
        "bag": 150
    },
    {
        "name": "WX-78",
        "bag": 375
    },
    {
        "name": "Wickerbottom",
        "bag": 150
    },
    {
        "name": "Woodie",
        "bag": 150
    },
    {
        "name": "Wes",
        "bag": 375
    },
    {
        "name": "Maxwell",
        "bag": 150
    },
    {
        "name": "Wagstaff",
        "bag": 225
    },
    {
        "name": "Wigfrid",
        "bag": 120
    },
    {
        "name": "Webber",
        "bag": 175
    },
    {
        "name": "Walani",
        "bag": 200
    },
    {
        "name": "Warly",
        "bag": 250
    },
    {
        "name": "Wilbur",
        "bag": 175
    },
    {
        "name": "Woodlegs",
        "bag": 150
    },
    {
        "name": "Wilba",
        "bag": 200
    },
    {
        "name": "Wormwood",
        "bag": 150
    },
    {
        "name": "Wheeler",
        "bag": 150
    },
    {
        "name": "Winona",
        "bag": 150
    },
    {
        "name": "Wortox",
        "bag": 175
    },
    {
        "name": "Wurt",
        "bag": 250
    },
    {
        "name": "Walter",
        "bag": 110
    },
    {
        "name": "Wanda",
        "bag": 175
    }
]


const foods = [
    {}, // Dont remove this empty object 
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/6/66/Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Aloe",
        "life": 8,
        "weight": 7
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/a/a8/Cooked_Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Aloe",
        "life": 3,
        "weight": 2
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/4/45/Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Asparagus",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/f/fe/Cooked_Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Asparagus",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://static.wikia.nocookie.net/dont-starve-game/images/9/92/Barnacles.png/revision/latest/scale-to-width-down/48?cb=20200702183944",
        "name": "Barnacles",
        "life": 0,
        "weight": 12
    },
]

function print_matriz(table) {
    let str = '';

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            str += table[i][j] + ' | ';
        }
        str += '\n';
    }
    console.log(str + '\n');
}


const getRandomFoods = (foods) => {
    const randomFoods = [];
    for (let i = 0; i < 2; i++) {
        const random = foods[(Math.random() * foods.length) | 0];
        randomFoods.push(random);
    }
    return randomFoods;
}


const generateFoodsPerRegion = (foods) => {
    const foodsPerRegion = [];

    for (let i = 0; i <= 2; i++) {
        const regionFoods = getRandomFoods(foods);
        foodsPerRegion.push(regionFoods);
    }

    return foodsPerRegion;

}

//Depois de escolher o personagem, ele possui um peso da mochila
const knapSack = (foods, bag_weight) => {
    const qtdItens = foods.length;

    // Tabela usada na DP
    let M = new Array(qtdItens);

    // Tabela de seleção de itens
    let selection = new Array(qtdItens);;

    for (let i = 0; i < qtdItens; i++) {
        M[i] = new Array(bag_weight + 1).fill(0);
        selection[i] = new Array(bag_weight + 1).fill(0);
    }

    for (let i = 1; i < qtdItens; i++) {
        for (let j = 1; j <= bag_weight; j++) {
            // Inicialmente não pegamos esse objeto
            const VALUE_WITHOUT_THIS_ITEM = M[i - 1][j];

            M[i][j] = VALUE_WITHOUT_THIS_ITEM;
            selection[i][j] = 0;

            const life = foods[i].life;
            const weight = foods[i].weight;

            const VALUE_WITH_THIS_ITEM = life + M[i - 1][j - weight];

            if (weight <= j && VALUE_WITH_THIS_ITEM > VALUE_WITHOUT_THIS_ITEM) {
                M[i][j] = VALUE_WITH_THIS_ITEM;
                selection[i][j] = 1;
            }
        }
    }

    // print_matriz(M);
    // console.log("----------------------------------------------------------------------------------------------------")
    // print_matriz(selection);

    const selectedFoods = [];
    let m = bag_weight;
    let totalWeight = 0;

    for (let i = qtdItens - 1; i >= 1; i--) {
        if (selection[i][m] === 1) {
            //console.log(foods[i].name, foods[i].life, foods[i].weight);
            selectedFoods.push(foods[i]);
            totalWeight += foods[i].weight;
            m = m - foods[i].weight;
        }
    }

    const totalLife = M[qtdItens - 1][bag_weight];
    return { totalLife, totalWeight, selectedFoods };
}


const generateKnapSack = (foodsPerRegion, bag_weight) => {
    const bestKnapsacks = [];
    for (let i = 0; i < foodsPerRegion.length; i++) {
        const knapsack = knapSack(foodsPerRegion[i], bag_weight);
        console.log(knapsack)
        bestKnapsacks.push(knapsack);
    }

    return bestKnapsacks;
}

// const M = knapSack(foods, characters[0].bag);
// console.log(M)

const f = generateFoodsPerRegion(foods)
//console.log(f[0])

const bestKnapSack = generateKnapSack(f, characters[0].bag);

console.log(bestKnapSack[0].selectedFoods)