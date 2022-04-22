const characters = [
    {
        "name": "Wilson",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/78/Wilson.png/revision/latest/scale-to-width-down/350?cb=20140330212319",
        "bag": 150
    },
    {
        "name": "Willow",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b2/Willow.png/revision/latest/scale-to-width-down/350?cb=20130602060445",
        "bag": 150
    },
    {
        "name": "Wolfgang",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/af/Wolfgang.png/revision/latest/scale-to-width-down/350?cb=20140330211944",
        "bag": 300
    },
    {
        "name": "Wendy",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/2d/Wendy.png/revision/latest/scale-to-width-down/350?cb=20140330212641",
        "bag": 150
    },
    {
        "name": "WX-78",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c9/WX-78.png/revision/latest/scale-to-width-down/350?cb=20140119124649",
        "bag": 375
    },
    {
        "name": "Wickerbottom",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/c8/Wickerbottom.png/revision/latest/scale-to-width-down/350?cb=20140330212735",
        "bag": 150
    },
    {
        "name": "Woodie",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814",
        "bag": 150
    },
    {
        "name": "Wes",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/0/0f/Wes.png/revision/latest/scale-to-width-down/350?cb=20140330212909",
        "bag": 375
    },
    {
        "name": "Maxwell",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d5/Maxwell.png/revision/latest/scale-to-width-down/350?cb=20140330212229",
        "bag": 150
    },
    {
        "name": "Wagstaff",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/95/Wagstaff.png/revision/latest/scale-to-width-down/350?cb=20190508224331",
        "bag": 225
    },
    {
        "name": "Wigfrid",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/df/Wigfrid.png/revision/latest/scale-to-width-down/350?cb=20140402184633",
        "bag": 120
    },
    {
        "name": "Webber",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/c/cc/Webber.png/revision/latest/scale-to-width-down/350?cb=20140402184719",
        "bag": 175
    },
    {
        "name": "Walani",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/7/76/Walani.png/revision/latest/scale-to-width-down/350?cb=20151217194709",
        "bag": 200
    },
    {
        "name": "Warly",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/da/Warly.png/revision/latest/scale-to-width-down/350?cb=20160114201147",
        "bag": 250
    },
    {
        "name": "Wilbur",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9a/Wilbur.png/revision/latest/scale-to-width-down/350?cb=20160206232753",
        "bag": 175
    },
    {
        "name": "Woodlegs",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/e/ea/Woodlegs.png/revision/latest/scale-to-width-down/350?cb=20160226045238",
        "bag": 150
    },
    {
        "name": "Wilba",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/9/9f/Wilba.png/revision/latest/scale-to-width-down/350?cb=20181016021621",
        "bag": 200
    },
    {
        "name": "Wormwood",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a5/Wormwood.png/revision/latest/scale-to-width-down/350?cb=20190207224130",
        "bag": 150
    },
    {
        "name": "Wheeler",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/d/d2/Wheeler.png/revision/latest/scale-to-width-down/350?cb=20190418203317",
        "bag": 150
    },
    {
        "name": "Winona",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/3/34/Winona_DST.png/revision/latest/scale-to-width-down/350?cb=20170913181659",
        "bag": 150
    },
    {
        "name": "Wortox",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/6f/Wortox_DST.png/revision/latest/scale-to-width-down/350?cb=20190512081614",
        "bag": 175
    },
    {
        "name": "Wurt",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/a/a5/Wurt_DST.png/revision/latest/scale-to-width-down/350?cb=20200201182734",
        "bag": 250
    },
    {
        "name": "Walter",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/b/b5/Walter_DST.png/revision/latest/scale-to-width-down/350?cb=20200615173238",
        "bag": 110
    },
    {
        "name": "Wanda",
        "link": "https://vignette.wikia.nocookie.net/dont-starve-game/images/6/68/Wanda_DST.png/revision/latest/scale-to-width-down/350?cb=20210908195936",
        "bag": 175
    }
]

export default { characters };