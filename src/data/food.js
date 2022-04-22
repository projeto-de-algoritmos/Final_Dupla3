const foods = [
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/66/Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Aloe",
        "life": 8,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a8/Cooked_Aloe.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Aloe",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/45/Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Asparagus",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/fe/Cooked_Asparagus.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Asparagus",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/92/Barnacles.png/revision/latest/scale-to-width-down/48?cb=20200702183944",
        "name": "Barnacles",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e5/Cooked_Barnacles.png/revision/latest/scale-to-width-down/48?cb=20200702184032",
        "name": "Cooked Barnacles",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a8/Batilisk_Wing.png/revision/latest/scale-to-width-down/48?cb=20130519201751",
        "name": "Batilisk Wing",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d2/Cooked_Batilisk_Wing.png/revision/latest/scale-to-width-down/48?cb=20130519203451",
        "name": "Cooked Batilisk Wing",
        "life": 8,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8d/Bean_Bugs.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Bean Bugs",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/31/Cooked_Bean_Bugs.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Bean Bugs",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/24/Berries.png/revision/latest/scale-to-width-down/48?cb=20140311161723",
        "name": "Berries",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c6/Roasted_Berries.png/revision/latest/scale-to-width-down/48?cb=20121215145255",
        "name": "Roasted Berries",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0d/Bile-Covered_Slop.png/revision/latest/scale-to-width-down/48?cb=20181003141558",
        "name": "Bile-Covered Slop",
        "life": 1,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/79/Roasted_Birchnut.png/revision/latest/scale-to-width-down/48?cb=20140314200922",
        "name": "Roasted Birchnut",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9f/Blooming_Tuber.png/revision/latest/scale-to-width-down/48?cb=20181021192032",
        "name": "Blooming Tuber",
        "life": 10,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/37/Fried_Blooming_Tuber.png/revision/latest/scale-to-width-down/48?cb=20181021191936",
        "name": "Fried Blooming Tuber",
        "life": 3,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/79/Blubber.png/revision/latest/scale-to-width-down/48?cb=20151207002726",
        "name": "Blubber",
        "life": 10,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/4c/Brainy_Matter.png/revision/latest/scale-to-width-down/48?cb=20151207224352",
        "name": "Brainy Matter",
        "life": 10,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cd/Bramble_Bulb.png/revision/latest/scale-to-width-down/48?cb=20190319113117",
        "name": "Bramble Bulb",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f1/Butter.png/revision/latest/scale-to-width-down/48?cb=20121215201639",
        "name": "Butter",
        "life": 40,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/19/Butterfly_Wings.png/revision/latest/scale-to-width-down/48?cb=20121215202033",
        "name": "Butterfly Wings",
        "life": 8,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0e/Cactus_Flesh.png/revision/latest/scale-to-width-down/48?cb=20130414004711",
        "name": "Cactus Flesh",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/3b/Cooked_Cactus_Flesh.png/revision/latest/scale-to-width-down/48?cb=20130414004516",
        "name": "Cooked Cactus Flesh",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/ab/Cactus_Flower.png/revision/latest/scale-to-width-down/48?cb=20130414004627",
        "name": "Cactus Flower",
        "life": 8,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c3/Carrot.png/revision/latest/scale-to-width-down/48?cb=20130527182010",
        "name": "Carrot",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/bf/Roasted_Carrot.png/revision/latest/scale-to-width-down/48?cb=20121215213333",
        "name": "Roasted Carrot",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/14/Cave_Banana.png/revision/latest/scale-to-width-down/48?cb=20130605070051",
        "name": "Banana",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/ad/Cooked_Cave_Banana.png/revision/latest/scale-to-width-down/48?cb=20130606065259",
        "name": "Cooked Banana",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b1/Clippings.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Clippings",
        "life": 1,
        "weight": 4
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/4b/Halved_Coconut.png/revision/latest/scale-to-width-down/48?cb=20160204233953",
        "name": "Halved Coconut",
        "life": 1,
        "weight": 4
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b8/Roasted_Coconut.png/revision/latest/scale-to-width-down/48?cb=20160204233452",
        "name": "Roasted Coconut",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/7b/Coffee_Beans.png/revision/latest/scale-to-width-down/48?cb=20151209220430",
        "name": "Coffee Beans",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/55/Cooked_Coffee_Beans.png/revision/latest/scale-to-width-down/48?cb=20151209220425",
        "name": "Roasted Coffee Beans",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f8/Corn.png/revision/latest/scale-to-width-down/48?cb=20121215214325",
        "name": "Corn",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/85/Popcorn.png/revision/latest/scale-to-width-down/48?cb=20121215214435",
        "name": "Popcorn",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/37/Dead_Dogfish.png/revision/latest/scale-to-width-down/48?cb=20151207105449",
        "name": "Dead Dogfish",
        "life": 1,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/7f/Dead_Jellyfish.png/revision/latest/scale-to-width-down/48?cb=20151207140821",
        "name": "Dead Jellyfish",
        "life": 10,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/39/Cooked_Jellyfish.png/revision/latest/scale-to-width-down/48?cb=20151207141920",
        "name": "Cooked Jellyfish",
        "life": 10,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0a/Dried_Jellyfish.png/revision/latest/scale-to-width-down/48?cb=20151207143126",
        "name": "Dried Jellyfish",
        "life": 10,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/46/Dead_Rainbow_Jellyfish.png/revision/latest/scale-to-width-down/48?cb=20170913220944",
        "name": "Dead Rainbow Jellyfish",
        "life": 10,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/58/Cooked_Rainbow_Jellyfish.png/revision/latest/scale-to-width-down/48?cb=20170913220931",
        "name": "Cooked Rainbow Jellyfish",
        "life": 10,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a0/Dead_Swordfish.png/revision/latest/scale-to-width-down/48?cb=20151207153505",
        "name": "Dead Swordfish",
        "life": 1,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/98/Dead_Wobster.png/revision/latest/scale-to-width-down/48?cb=20151207151529",
        "name": "Dead Wobster",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/6a/Cooked_Wobster.png/revision/latest/scale-to-width-down/48?cb=20151207151606",
        "name": "Delicious Wobster",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/24/Deerclops_Eyeball.png/revision/latest/scale-to-width-down/48?cb=20130406182106",
        "name": "Deerclops Eyeball",
        "life": 60,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/eb/Doydoy_Egg.png/revision/latest/scale-to-width-down/48?cb=20160115182254",
        "name": "Doydoy Egg",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d0/Fried_Doydoy_Egg.png/revision/latest/scale-to-width-down/48?cb=20160115182321",
        "name": "Fried Doydoy Egg",
        "life": 0,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/44/Dragoon_Heart.png/revision/latest/scale-to-width-down/48?cb=20160208003014",
        "name": "Dragoon Heart",
        "life": 11,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/29/Dragon_Fruit.png/revision/latest/scale-to-width-down/48?cb=20121215232310",
        "name": "Dragon Fruit",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/3e/Prepared_Dragon_Fruit.png/revision/latest/scale-to-width-down/48?cb=20121215232459",
        "name": "Prepared Dragon Fruit",
        "life": 20,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/dd/Drumstick.png/revision/latest/scale-to-width-down/48?cb=20121215232637",
        "name": "Drumstick",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d0/Fried_Drumstick.png/revision/latest/scale-to-width-down/48?cb=20121215232821",
        "name": "Fried Drumstick",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/39/Durian.png/revision/latest/scale-to-width-down/48?cb=20121215235223",
        "name": "Durian",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a4/Extra_Smelly_Durian.png/revision/latest/scale-to-width-down/48?cb=20121215235352",
        "name": "Extra Smelly Durian",
        "life": 0,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/91/Eel.png/revision/latest/scale-to-width-down/48?cb=20130905054857",
        "name": "Eel",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d2/Cooked_Eel.png/revision/latest/scale-to-width-down/48?cb=20130925193100",
        "name": "Cooked Eel",
        "life": 8,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/39/Electric_Milk.png/revision/latest/scale-to-width-down/48?cb=20140417151518",
        "name": "Electric Milk",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/26/Egg.png/revision/latest/scale-to-width-down/48?cb=20130315214629",
        "name": "Egg",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a5/Cooked_Egg.png/revision/latest/scale-to-width-down/48?cb=20130315223155",
        "name": "Cooked Egg",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8f/Eggplant.png/revision/latest/scale-to-width-down/48?cb=20121215235642",
        "name": "Eggplant",
        "life": 8,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/35/Braised_Eggplant.png/revision/latest/scale-to-width-down/48?cb=20121215235737",
        "name": "Braised Eggplant",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/83/Eye_of_the_Tiger_Shark.png/revision/latest/scale-to-width-down/48?cb=20160218023332",
        "name": "Eye of the Tiger Shark",
        "life": 60,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/fb/Fish.png/revision/latest/scale-to-width-down/48?cb=20121216000645",
        "name": "Fish",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f6/Cooked_Fish.png/revision/latest/scale-to-width-down/48?cb=20121216164119",
        "name": "Cooked Fish",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/37/Fish_Morsel.png/revision/latest/scale-to-width-down/48?cb=20191117221603",
        "name": "Fish Morsel",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/20/Cooked_Fish_Morsel.png/revision/latest/scale-to-width-down/48?cb=20151209135156",
        "name": "Cooked Fish Morsel",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/ed/Flytrap_Stalk.png/revision/latest/scale-to-width-down/48?cb=20181018153551",
        "name": "Flytrap Stalk",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/21/Foliage.png/revision/latest/scale-to-width-down/48?cb=20130926222841",
        "name": "Foliage",
        "life": 1,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/52/Frog_Legs.png/revision/latest/scale-to-width-down/48?cb=20121216095344",
        "name": "Frog Legs",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f1/Cooked_Frog_Legs.png/revision/latest/scale-to-width-down/48?cb=20121216095503",
        "name": "Cooked Frog Legs",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cc/Garlic.png/revision/latest/scale-to-width-down/48?cb=20180616094659",
        "name": "Garlic",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/50/Roast_Garlic.png/revision/latest/scale-to-width-down/48?cb=20180616094702",
        "name": "Roasted Garlic",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/7d/Gears.png/revision/latest/scale-to-width-down/48?cb=20130916211413",
        "name": "Gears ( only)",
        "life": 60,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/ff/Glommer%27s_Goop.png/revision/latest/scale-to-width-down/48?cb=20140319080359",
        "name": "Glommer's Goop",
        "life": 40,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/dc/Glow_Berry.png/revision/latest/scale-to-width-down/48?cb=20130924231256",
        "name": "Glow Berry",
        "life": 10,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/5c/Lesser_Glow_Berry.png/revision/latest/scale-to-width-down/48?cb=20151124061733",
        "name": "Lesser Glow Berry",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1f/Guardian%27s_Horn.png/revision/latest/scale-to-width-down/48?cb=20130905151238",
        "name": "Guardian's Horn",
        "life": 60,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/69/Gummy_Slug.png/revision/latest/scale-to-width-down/48?cb=20181017151524",
        "name": "Gummy Slug",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8a/Cooked_Gummy_Slug.png/revision/latest/scale-to-width-down/48?cb=20181017151523",
        "name": "Cooked Gummy Slug",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c6/Honey.png/revision/latest/scale-to-width-down/48?cb=20121216095608",
        "name": "Honey",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/77/Ice.png/revision/latest/scale-to-width-down/48?cb=20140711022650",
        "name": "Ice",
        "life": 0.5,
        "weight": 2
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/98/Juicy_Berries.png/revision/latest/scale-to-width-down/48?cb=20160518182151",
        "name": "Juicy Berries",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e5/Roasted_Juicy_Berries.png/revision/latest/scale-to-width-down/48?cb=20160518181621",
        "name": "Roasted Juicy Berries",
        "life": 3,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/26/Kelp_Fronds.png/revision/latest/scale-to-width-down/48?cb=20190517194956",
        "name": "Kelp Fronds",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/40/Cooked_Kelp_Fronds.png/revision/latest/scale-to-width-down/48?cb=20190517194954",
        "name": "Cooked Kelp Fronds",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1a/Dried_Kelp_Fronds.png/revision/latest/scale-to-width-down/48?cb=20190517194955",
        "name": "Dried Kelp Fronds",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0e/Koalefant_Trunk.png/revision/latest/scale-to-width-down/48?cb=20130129202223",
        "name": "Koalefant Trunk",
        "life": 30,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2d/Winter_Koalefant_Trunk.png/revision/latest/scale-to-width-down/48?cb=20130315012952",
        "name": "Winter Koalefant Trunk",
        "life": 30,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/73/Koalefant_Trunk_Steak.png/revision/latest/scale-to-width-down/48?cb=20130130105844",
        "name": "Koalefant Trunk Steak",
        "life": 40,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e9/Leafy_Meat.png/revision/latest/scale-to-width-down/48?cb=20130606065238",
        "name": "Leafy Meat",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1b/Cooked_Leafy_Meat.png/revision/latest/scale-to-width-down/48?cb=20130606065238",
        "name": "Cooked Leafy Meat",
        "life": 1,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8a/Lichen.png/revision/latest/scale-to-width-down/48?cb=20140119010352",
        "name": "Lichen",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2c/Light_Bulb.png/revision/latest/scale-to-width-down/48?cb=20130520052505",
        "name": "Light Bulb",
        "life": 1,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Limpets.png/revision/latest/scale-to-width-down/48?cb=20151204161107",
        "name": "Limpets",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/75/Cooked_Limpets.png/revision/latest/scale-to-width-down/48?cb=20151204161113",
        "name": "Cooked Limpets",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0e/Lotus_Flower.png/revision/latest/scale-to-width-down/48?cb=20181018153551",
        "name": "Lotus Flower",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/3a/Cooked_Lotus_Root.png/revision/latest/scale-to-width-down/48?cb=20181018153550",
        "name": "Cooked Lotus Root",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/01/Lune_Tree_Blossom.png/revision/latest/scale-to-width-down/48?cb=20190517194957",
        "name": "Lune Tree Blossom",
        "life": 1,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c4/Magic_Water.png/revision/latest/scale-to-width-down/48?cb=20181024202903",
        "name": "Magic Water",
        "life": 300,
        "weight": 450
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c3/Mandrake.png/revision/latest/scale-to-width-down/48?cb=20121216102341",
        "name": "Mandrake",
        "life": 60,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/3e/Cooked_Mandrake.png/revision/latest/scale-to-width-down/48?cb=20121215213753",
        "name": "Cooked Mandrake",
        "life": 100,
        "weight": 150
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/58/Meat.png/revision/latest/scale-to-width-down/48?cb=20121215214111",
        "name": "Meat",
        "life": 1,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cd/Cooked_Meat.png/revision/latest/scale-to-width-down/48?cb=20121215213855",
        "name": "Cooked Meat",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/68/Jerky.png/revision/latest/scale-to-width-down/48?cb=20130314200644",
        "name": "Jerky",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/81/Monster_Meat.png/revision/latest/scale-to-width-down/48?cb=20121216110700",
        "name": "Monster Meat",
        "life": 20,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0a/Cooked_Monster_Meat.png/revision/latest/scale-to-width-down/48?cb=20121216110609",
        "name": "Cooked Monster Meat",
        "life": 3,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/3b/Monster_Jerky.png/revision/latest/scale-to-width-down/48?cb=20130314200334",
        "name": "Monster Jerky",
        "life": 3,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/bd/Moon_Shroom.png/revision/latest/scale-to-width-down/48?cb=20201015200941",
        "name": "Moon Shroom",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/5b/Cooked_Moon_Shroom.png/revision/latest/scale-to-width-down/48?cb=20201015201006",
        "name": "Cooked Moon Shroom",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9e/Moon_Moth_Wings.png/revision/latest/scale-to-width-down/48?cb=20190517195309",
        "name": "Moon Moth Wings",
        "life": 8,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2e/Morsel.png/revision/latest/scale-to-width-down/48?cb=20121216154734",
        "name": "Morsel",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/29/Cooked_Morsel.png/revision/latest/scale-to-width-down/48?cb=20121216161825",
        "name": "Cooked Morsel",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/20/Small_Jerky.png/revision/latest/scale-to-width-down/48?cb=20130314200934",
        "name": "Small Jerky",
        "life": 8,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/aa/Mussel.png/revision/latest/scale-to-width-down/48?cb=20151207202855",
        "name": "Mussel",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cd/Cooked_Mussel.png/revision/latest/scale-to-width-down/48?cb=20151207104536",
        "name": "Cooked Mussel",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/37/Blue_Cap.png/revision/latest/scale-to-width-down/48?cb=20130315205709",
        "name": "Blue Cap",
        "life": 20,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9a/Cooked_Blue_Cap.png/revision/latest/scale-to-width-down/48?cb=20130420033417",
        "name": "Cooked Blue Cap",
        "life": 3,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/84/Green_Cap.png/revision/latest/scale-to-width-down/48?cb=20130315205718",
        "name": "Green Cap",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b9/Cooked_Green_Cap.png/revision/latest/scale-to-width-down/48?cb=20130420033358",
        "name": "Cooked Green Cap",
        "life": 1,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0f/Red_Cap.png/revision/latest/scale-to-width-down/48?cb=20130315205658",
        "name": "Red Cap",
        "life": 20,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/5a/Cooked_Red_Cap.png/revision/latest/scale-to-width-down/48?cb=20130420033326",
        "name": "Cooked Red Cap",
        "life": 1,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/dc/Nectar.png/revision/latest/scale-to-width-down/48?cb=20181017152929",
        "name": "Nectar",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/ff/Neon_Quattro.png/revision/latest/scale-to-width-down/48?cb=20170913220444",
        "name": "Neon Quattro",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/df/Cooked_Neon_Quattro.png/revision/latest/scale-to-width-down/48?cb=20170913220502",
        "name": "Cooked Neon Quattro",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/40/Nettle.png/revision/latest/scale-to-width-down/48?cb=20181017152929",
        "name": "Nettle",
        "life": 10,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/51/Onion.png/revision/latest/scale-to-width-down/48?cb=20180616094700",
        "name": "Onion",
        "life": 0,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0f/Roast_Onion.png/revision/latest/scale-to-width-down/48?cb=20180616094703",
        "name": "Roasted Onion",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/50/Pepper.png/revision/latest/scale-to-width-down/48?cb=20190725220029",
        "name": "Pepper",
        "life": 20,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/7e/Roasted_Pepper.png/revision/latest/scale-to-width-down/48?cb=20190725220122",
        "name": "Roasted Pepper",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d8/Petals.png/revision/latest/scale-to-width-down/48?cb=20121216131625",
        "name": "Petals",
        "life": 1,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/4d/Dark_Petals.png/revision/latest/scale-to-width-down/48?cb=20130314181500",
        "name": "Dark Petals",
        "life": 0,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8c/Pierrot_Fish.png/revision/latest/scale-to-width-down/48?cb=20170913220350",
        "name": "Pierrot Fish",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/5f/Cooked_Pierrot_Fish.png/revision/latest/scale-to-width-down/48?cb=20170913220335",
        "name": "Cooked Pierrot Fish",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/eb/Phlegm.png/revision/latest/scale-to-width-down/48?cb=20141210082822",
        "name": "Phlegm",
        "life": 0,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/86/Poison_Dartfrog_Legs.png/revision/latest/scale-to-width-down/48?cb=20181017152930",
        "name": "Poison Dartfrog Legs",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/05/Cooked_Dartfrog_Legs.png/revision/latest/scale-to-width-down/48?cb=20181017152928",
        "name": "Cooked Dartfrog Legs",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1b/Pomegranate.png/revision/latest/scale-to-width-down/48?cb=20121216154133",
        "name": "Pomegranate",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a7/Sliced_Pomegranate.png/revision/latest/scale-to-width-down/48?cb=20121216154439",
        "name": "Sliced Pomegranate",
        "life": 20,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c2/Potato.png/revision/latest/scale-to-width-down/48?cb=20180616094702",
        "name": "Potato",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2c/Roasted_Potato.png/revision/latest/scale-to-width-down/48?cb=20180616094703",
        "name": "Roasted Potato",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/64/Pumpkin.png/revision/latest/scale-to-width-down/48?cb=20121216154526",
        "name": "Pumpkin",
        "life": 3,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/6f/Hot_Pumpkin.png/revision/latest/scale-to-width-down/48?cb=20121216154628",
        "name": "Hot Pumpkin",
        "life": 8,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/db/Purple_Grouper.png/revision/latest/scale-to-width-down/48?cb=20170913220201",
        "name": "Purple Grouper",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1e/Cooked_Purple_Grouper.png/revision/latest/scale-to-width-down/48?cb=20170913220214",
        "name": "Cooked Purple Grouper",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d5/Radish.png/revision/latest/scale-to-width-down/48?cb=20181016100628",
        "name": "Radish",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/3c/Cooked_Radish.png/revision/latest/scale-to-width-down/48?cb=20181018153550",
        "name": "Cooked Radish",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/77/Raw_Fish.png/revision/latest/scale-to-width-down/48?cb=20151207003251",
        "name": "Raw Fish",
        "life": 1,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a1/Fish_Steak.png/revision/latest/scale-to-width-down/48?cb=20151209132901",
        "name": "Fish Steak",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/56/Roe.png/revision/latest/scale-to-width-down/48?cb=20170913213742",
        "name": "Roe",
        "life": 1,
        "weight": 4
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/ff/Cooked_Roe.png/revision/latest/scale-to-width-down/48?cb=20170913220018",
        "name": "Cooked Roe",
        "life": 0,
        "weight": 4
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/66/Rot.png/revision/latest/scale-to-width-down/48?cb=20190301171002",
        "name": "Rot",
        "life": 1,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/03/Rotten_Egg.png/revision/latest/scale-to-width-down/48?cb=20130314124908",
        "name": "Rotten Egg",
        "life": 1,
        "weight": 10
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9f/Royal_Jelly.png/revision/latest/scale-to-width-down/48?cb=20161105175627",
        "name": "Royal Jelly",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/13/Seaweed.png/revision/latest/scale-to-width-down/48?cb=20151204161031",
        "name": "Seaweed",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/fc/Roasted_Seaweed.png/revision/latest/scale-to-width-down/48?cb=20151204161040",
        "name": "Roasted Seaweed",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a6/Dried_Seaweed.png/revision/latest/scale-to-width-down/48?cb=20151207150359",
        "name": "Dried Seaweed",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/09/Seed_Pod.png/revision/latest/scale-to-width-down/48?cb=20181017151524",
        "name": "Seed Pod",
        "life": 1,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1b/Cooked_Seed_Pod.png/revision/latest/scale-to-width-down/48?cb=20181017151524",
        "name": "Cooked Seed Pod",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/4b/Seeds.png/revision/latest/scale-to-width-down/48?cb=20121216124929",
        "name": "Seeds",
        "life": 0,
        "weight": 4
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d7/Toasted_Seeds.png/revision/latest/scale-to-width-down/48?cb=20121216142844",
        "name": "Toasted Seeds",
        "life": 1,
        "weight": 4
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/94/Crops.png/revision/latest/scale-to-width-down/48?cb=20131111111044",
        "name": "Crop Seeds",
        "life": 0.5,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9b/Shark_Fin.png/revision/latest/scale-to-width-down/48?cb=20151209045516",
        "name": "Shark Fin",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/79/Ripe_Stone_Fruit.png/revision/latest/scale-to-width-down/48?cb=20190517195311",
        "name": "Ripe Stone Fruit",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d0/Cooked_Stone_Fruit.png/revision/latest/scale-to-width-down/48?cb=20190517194954",
        "name": "Cooked Stone Fruit",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/af/Succulent.png/revision/latest/scale-to-width-down/48?cb=20170203191635",
        "name": "Succulent",
        "life": 1,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/26/Sweet_Potato.png/revision/latest/scale-to-width-down/48?cb=20151207164318",
        "name": "Sweet Potato",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/27/Cooked_Sweet_Potato.png/revision/latest/scale-to-width-down/48?cb=20151207164333",
        "name": "Cooked Sweet Potato",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/53/Tallbird_Egg.png/revision/latest/scale-to-width-down/48?cb=20121216155027",
        "name": "Tallbird Egg",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f6/Hatching_Tallbird_Egg.png/revision/latest/scale-to-width-down/48?cb=20121216155315",
        "name": "Hatching Tallbird Egg",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8b/Fried_Tallbird_Egg.png/revision/latest/scale-to-width-down/48?cb=20121216155155",
        "name": "Fried Tallbird Egg",
        "life": 0,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9c/Toma_Root.png/revision/latest/scale-to-width-down/48?cb=20180617164224",
        "name": "Toma Root",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f9/Roast_Toma_Root.png/revision/latest/scale-to-width-down/48?cb=20180616100003",
        "name": "Roasted Toma Root",
        "life": 20,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/24/Tropical_Fish.png/revision/latest/scale-to-width-down/48?cb=20151207103431",
        "name": "Tropical Fish",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/7f/Tuber.png/revision/latest/scale-to-width-down/48?cb=20181017151525",
        "name": "Tuber",
        "life": 8,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/08/Fried_Tuber.png/revision/latest/scale-to-width-down/48?cb=20181017151524",
        "name": "Fried Tuber",
        "life": 3,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/06/Watermelon.png/revision/latest/scale-to-width-down/48?cb=20140313015348",
        "name": "Watermelon",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/62/Grilled_Watermelon.png/revision/latest/scale-to-width-down/48?cb=20140421160715",
        "name": "Grilled Watermelon",
        "life": 1,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a1/Asparagazpacho.png/revision/latest/scale-to-width-down/48?cb=20190725213512",
        "name": "Asparagazpacho",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/83/Asparagus_Soup.png/revision/latest/scale-to-width-down/48?cb=20181017151522",
        "name": "Asparagus Soup",
        "life": 20,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a6/Bacon_and_Eggs.png/revision/latest/scale-to-width-down/48?cb=20121215143942",
        "name": "Bacon and Eggs",
        "life": 20,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/fc/Banana_Pop.png/revision/latest/scale-to-width-down/48?cb=20151208105712",
        "name": "Banana Pop",
        "life": 20,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b1/Barnacle_Linguine.png/revision/latest/scale-to-width-down/48?cb=20200702184248",
        "name": "Barnacle Linguine",
        "life": 10,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/47/Barnacle_Nigiri.png/revision/latest/scale-to-width-down/48?cb=20200702184208",
        "name": "Barnacle Nigiri",
        "life": 40,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/60/Barnacle_Pita.png/revision/latest/scale-to-width-down/48?cb=20200702184138",
        "name": "Barnacle Pita",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/4f/Beefy_Greens.png/revision/latest/scale-to-width-down/48?cb=20200702184505",
        "name": "Beefy Greens",
        "life": 40,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/97/Bisque.png/revision/latest/scale-to-width-down/48?cb=20151208105720",
        "name": "Bisque",
        "life": 60,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e3/Bone_Bouillon.png/revision/latest/scale-to-width-down/48?cb=20190725213512",
        "name": "Bone Bouillon",
        "life": 32,
        "weight": 150
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/92/Butter_Muffin.png/revision/latest/scale-to-width-down/48?cb=20121216105851",
        "name": "Butter Muffin",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d4/California_Roll.png/revision/latest/scale-to-width-down/48?cb=20151208105728",
        "name": "California Roll",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/89/Caviar.png/revision/latest/scale-to-width-down/48?cb=20170913215133",
        "name": "Caviar",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/43/Ceviche.png/revision/latest/scale-to-width-down/48?cb=20151208105739",
        "name": "Ceviche",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e9/Coffee.png/revision/latest/scale-to-width-down/48?cb=20181003141459",
        "name": "Coffee",
        "life": 3,
        "weight": 9
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d7/Creamy_Potato_Pur%C3%A9e.png/revision/latest/scale-to-width-down/48?cb=20190725213513",
        "name": "Creamy Potato Pure",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2b/Dragonpie.png/revision/latest/scale-to-width-down/48?cb=20121215232541",
        "name": "Dragonpie",
        "life": 40,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e5/Fancy_Spiralled_Tubers.png/revision/latest/scale-to-width-down/48?cb=20190728225317",
        "name": "Fancy Spiralled Tubers",
        "life": 3,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d9/Feijoada.png/revision/latest/scale-to-width-down/48?cb=20181021193107",
        "name": "Feijoada",
        "life": 20,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b2/Fish_Cordon_Bleu.png/revision/latest/scale-to-width-down/48?cb=20190725213513",
        "name": "Fish Cordon Bleu",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/af/Fish_Tacos.png/revision/latest/scale-to-width-down/48?cb=20121216094542",
        "name": "Fish Tacos",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/4d/Fishsticks.png/revision/latest/scale-to-width-down/48?cb=20121216000843",
        "name": "Fishsticks",
        "life": 40,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/27/Fist_Full_of_Jam.png/revision/latest/scale-to-width-down/48?cb=20130117000604",
        "name": "Fist Full of Jam",
        "life": 3,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d8/Flower_Salad.png/revision/latest/scale-to-width-down/48?cb=20140417062405",
        "name": "Flower Salad",
        "life": 40,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/14/Fresh_Fruit_Crepes.png/revision/latest/scale-to-width-down/48?cb=20160226072816",
        "name": "Fresh Fruit Crepes",
        "life": 60,
        "weight": 150
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2b/Froggle_Bunwich.png/revision/latest/scale-to-width-down/48?cb=20121216094905",
        "name": "Froggle Bunwich",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/34/Fruit_Medley.png/revision/latest/scale-to-width-down/48?cb=20121216095533",
        "name": "Fruit Medley",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/18/Glow_Berry_Mousse.png/revision/latest/scale-to-width-down/48?cb=20190725213514",
        "name": "Glow Berry Mousse",
        "life": 3,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e5/Grim_Galette.png/revision/latest/scale-to-width-down/48?cb=20190725213514",
        "name": "Grim Galette",
        "life": 1,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/91/Guacamole.png/revision/latest/scale-to-width-down/48?cb=20140417075919",
        "name": "Guacamole",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a8/Gummy_Cake.png/revision/latest/scale-to-width-down/48?cb=20181021194253",
        "name": "Gummy Cake",
        "life": 3,
        "weight": 150
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1f/Hard_Shell_Tacos.png/revision/latest/scale-to-width-down/48?cb=20181021193610",
        "name": "Hard Shell Tacos",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/6b/Honey_Ham.png/revision/latest/scale-to-width-down/48?cb=20121216095929",
        "name": "Honey Ham",
        "life": 30,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1b/Honey_Nuggets.png/revision/latest/scale-to-width-down/48?cb=20130117000531",
        "name": "Honey Nuggets",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/15/Hot_Dragon_Chili_Salad.png/revision/latest/scale-to-width-down/48?cb=20190725213515",
        "name": "Hot Dragon Chili Salad",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/5d/Ice_Cream.png/revision/latest/scale-to-width-down/48?cb=20140421080109",
        "name": "Ice Cream",
        "life": 0,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/4f/Iced_Tea.png/revision/latest/scale-to-width-down/48?cb=20181021191407",
        "name": "Iced Tea",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/db/Jellybeans.png/revision/latest/scale-to-width-down/48?cb=20161105175356",
        "name": "Jellybeans",
        "life": 122,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9b/Jelly-O_Pop.png/revision/latest/scale-to-width-down/48?cb=20151208105747",
        "name": "Jelly-O Pop",
        "life": 20,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/ed/Jelly_Salad.png/revision/latest/scale-to-width-down/48?cb=20200702184438",
        "name": "Jelly Salad",
        "life": 0,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/46/Kabobs.png/revision/latest/scale-to-width-down/48?cb=20121216101957",
        "name": "Kabobs",
        "life": 3,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a3/Leafy_Meatloaf.png/revision/latest/scale-to-width-down/48?cb=20200702184349",
        "name": "Leafy Meatloaf",
        "life": 8,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e2/Mandrake_Soup.png/revision/latest/scale-to-width-down/48?cb=20121216102448",
        "name": "Mandrake Soup",
        "life": 100,
        "weight": 150
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/bf/Meatballs.png/revision/latest/scale-to-width-down/48?cb=20130117000546",
        "name": "Meatballs",
        "life": 3,
        "weight": 62
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d4/Meaty_Stew.png/revision/latest/scale-to-width-down/48?cb=20121215201357",
        "name": "Meaty Stew",
        "life": 12,
        "weight": 150
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0f/Melonsicle.png/revision/latest/scale-to-width-down/48?cb=20140417075818",
        "name": "Melonsicle",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f9/Monster_Lasagna.png/revision/latest/scale-to-width-down/48?cb=20130130101155",
        "name": "Monster Lasagna",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2d/Monster_Tartare.png/revision/latest/scale-to-width-down/48?cb=20160226072906",
        "name": "Monster Tartare",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/bb/Moqueca.png/revision/latest/scale-to-width-down/48?cb=20190725213515",
        "name": "Moqueca",
        "life": 60,
        "weight": 112
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8c/Mushy_Cake.png/revision/latest/scale-to-width-down/48?cb=20201015201345",
        "name": "Mushy Cake",
        "life": 0,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/57/Mussel_Bouillabaise.png/revision/latest/scale-to-width-down/48?cb=20160226072941",
        "name": "Mussel Bouillabaise",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/4/47/Nettle_Rolls.png/revision/latest/scale-to-width-down/48?cb=20181017152929",
        "name": "Nettle Rolls",
        "life": 20,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/91/Pierogi.png/revision/latest/scale-to-width-down/48?cb=20200924180547",
        "name": "Pierogi",
        "life": 40,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/1/1f/Powdercake.png/revision/latest/scale-to-width-down/48?cb=20130519194745",
        "name": "Powdercake",
        "life": 3,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b9/Puffed_Potato_Souffl%C3%A9.png/revision/latest/scale-to-width-down/48?cb=20190725213516",
        "name": "Puffed Potato Souffl\u00e9",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c5/Pumpkin_Cookies.png/revision/latest/scale-to-width-down/48?cb=20130422151715",
        "name": "Pumpkin Cookies",
        "life": 0,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b0/Ratatouille.png/revision/latest/scale-to-width-down/48?cb=20121216142031",
        "name": "Ratatouille",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/07/Salsa_Fresca.png/revision/latest/scale-to-width-down/48?cb=20190725213516",
        "name": "Salsa Fresca",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/fc/Seafood_Gumbo.png/revision/latest/scale-to-width-down/48?cb=20151208105755",
        "name": "Seafood Gumbo",
        "life": 40,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/37/Shark_Fin_Soup.png/revision/latest/scale-to-width-down/48?cb=20151208105804",
        "name": "Shark Fin Soup",
        "life": 40,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a1/Snake_Bone_Soup.png/revision/latest/scale-to-width-down/48?cb=20181021191645",
        "name": "Snake Bone Soup",
        "life": 40,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/76/Spicy_Chili.png/revision/latest/scale-to-width-down/48?cb=20140423080548",
        "name": "Spicy Chili",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8c/Spicy_Vegetable_Stinger.png/revision/latest/scale-to-width-down/48?cb=20181021191546",
        "name": "Spicy Vegetable Stinger",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/8c/Spicy_Vegetable_Stinger.png/revision/latest/scale-to-width-down/48?cb=20181021191546",
        "name": "Vegetable Stinger",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/8/82/Steamed_Ham_Sandwich.png/revision/latest/scale-to-width-down/48?cb=20181021191501",
        "name": "Steamed Ham Sandwich",
        "life": 40,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/72/Stuffed_Eggplant.png/revision/latest/scale-to-width-down/48?cb=20121216154947",
        "name": "Stuffed Eggplant",
        "life": 3,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/71/Stuffed_Fish_Heads.png/revision/latest/scale-to-width-down/48?cb=20200702184311",
        "name": "Stuffed Fish Heads",
        "life": 20,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/54/Stuffed_Pepper_Poppers.png/revision/latest/scale-to-width-down/48?cb=20190725213516",
        "name": "Stuffed Pepper Poppers",
        "life": 30,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/3a/Surf_%27n%27_Turf.png/revision/latest/scale-to-width-down/48?cb=20151208110013",
        "name": "Surf 'n' Turf",
        "life": 60,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/dd/Sweet_Potato_Souffle.png/revision/latest/scale-to-width-down/48?cb=20160226073400",
        "name": "Sweet Potato Souffle",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/dc/Taffy.png/revision/latest/scale-to-width-down/48?cb=20130316013808",
        "name": "Taffy",
        "life": 3,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/5/59/Tea.png/revision/latest/scale-to-width-down/48?cb=20181017151524",
        "name": "Tea",
        "life": 3,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/f/f8/Trail_Mix.png/revision/latest/scale-to-width-down/48?cb=20140417132445",
        "name": "Trail Mix",
        "life": 30,
        "weight": 12
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/08/Tropical_Bouillabaisse.png/revision/latest/scale-to-width-down/48?cb=20170913221246",
        "name": "Tropical Bouillabaisse",
        "life": 20,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e6/Turkey_Dinner.png/revision/latest/scale-to-width-down/48?cb=20121216162543",
        "name": "Turkey Dinner",
        "life": 20,
        "weight": 75
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/36/Unagi.png/revision/latest/scale-to-width-down/48?cb=20130926222900",
        "name": "Unagi",
        "life": 20,
        "weight": 18
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/25/Veggie_Burger.png/revision/latest/scale-to-width-down/48?cb=20200702184415",
        "name": "Veggie Burger",
        "life": 30,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/60/Volt_Goat_Chaud-Froid.png/revision/latest/scale-to-width-down/48?cb=20190725213517",
        "name": "Volt Goat Chaud-Froid",
        "life": 3,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/e8/Waffles.png/revision/latest/scale-to-width-down/48?cb=20121216162615",
        "name": "Waffles",
        "life": 60,
        "weight": 37
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a8/Wet_Goop.png/revision/latest/scale-to-width-down/48?cb=20121216162705",
        "name": "Wet Goop",
        "life": 0,
        "weight": 0
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b3/Wobster_Bisque.png/revision/latest/scale-to-width-down/48?cb=20151207203909",
        "name": "Wobster Bisque",
        "life": 60,
        "weight": 25
    },
    {
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/32/Wobster_Dinner.png/revision/latest/scale-to-width-down/48?cb=20151207203859",
        "name": "Wobster Dinner",
        "life": 60,
        "weight": 25
    }
]

export default { foods };
