// Gera os alimentos aleatórios para cada região

const getRandomFoods = (foods) => {
    const randomFoods = [];
    for (let i = 0; i < 15; i++) {
        const random = foods[(Math.random() * foods.length) | 0];
        randomFoods.push(random);
    }
    console.log(randomFoods)
    return randomFoods;
}

const generateFoodsPerRegion = (foods) => {
    const foodsPerRegion = [];

    for (let i=0; i<=12; i++) {
        const regionFoods = getRandomFoods(foods);
        foodsPerRegion.push(regionFoods);
    }

    return foodsPerRegion;
}

export default generateFoodsPerRegion;

/*
Passo unico

função para gerar os 15 itens aleatorios para cada regiao
ela retorna um array com 15 elementos em cada posição, simbolizando o id da regiao
*/