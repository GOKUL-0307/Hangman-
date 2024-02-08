const wordList = [
    {
        word: "computer",
        hint: "An electronic device for storing and processing data."
    },
    {
        word: "beach",
        hint: "A sandy shore by the ocean or sea, often used for recreation."
    },
    {
        word: "garden",
        hint: "An outdoor space used for cultivation, relaxation, or beauty."
    },
    {
        word: "sunshine",
        hint: "The direct rays of the sun."
    },
    {
        word: "music",
        hint: "Art form consisting of sound and silence."
    },
    {
        word: "book",
        hint: "A written or printed work consisting of pages glued or sewn together along one side."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "rain",
        hint: "Precipitation in the form of water droplets falling from clouds."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "star",
        hint: "A luminous celestial body consisting of a mass of gas held together by its own gravity."
    },
    {
        word: "beauty",
        hint: "A combination of qualities, such as shape, color, or form, that pleases the aesthetic senses."
    },
    {
        word: "friendship",
        hint: "A relationship of mutual affection between people."
    },
    {
        word: "summer",
        hint: "The warmest season of the year, occurring between spring and autumn."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "moon",
        hint: "The natural satellite of the Earth."
    },
    {
        word: "smile",
        hint: "An expression of happiness or amusement."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "flower",
        hint: "The reproductive structure found in flowering plants."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "peace",
        hint: "Freedom from disturbance; tranquility."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "family",
        hint: "A group consisting of parents and their children."
    },
    {
        word: "dream",
        hint: "A series of thoughts, images, or emotions occurring during sleep."
    },
    {
        word: "laughter",
        hint: "The action or sound of laughing."
    },
    {
        word: "ocean",
        hint: "A large body of saltwater that covers most of the Earth's surface."
    },
    {
        word: "magic",
        hint: "The power of apparently influencing events by using mysterious or supernatural forces."
    },
    {
        word: "holiday",
        hint: "A day of festivity or recreation when no work is done."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "fireworks",
        hint: "Devices containing combustible chemicals that produce a visual and auditory display when ignited."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "art",
        hint: "The expression or application of human creative skill and imagination."
    },
    {
        word: "forest",
        hint: "A large area covered chiefly with trees and undergrowth."
    },
    {
        word: "dream",
        hint: "A series of thoughts, images, or emotions occurring during sleep."
    },
    {
        word: "winter",
        hint: "The coldest season of the year, occurring between autumn and spring."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "inspiration",
        hint: "The process of being mentally stimulated to do or feel something, especially to do something creative."
    },
    {
        word: "happiness",
        hint: "The state of being happy; joy."
    },
    {
        word: "forest",
        hint: "A large area covered chiefly with trees and undergrowth."
    },
    {
        word: "night",
        hint: "The period of darkness in each twenty-four hours."
    },
    {
        word: "bird",
        hint: "A warm-blooded egg-laying vertebrate with feathers, wings, and a beak."
    },
    {
        word: "roadtrip",
        hint: "A journey made by car, especially one involving stops at various places of interest."
    },
    {
        word: "sunrise",
        hint: "The time when the sun appears above the horizon in the morning."
    },
    {
        word: "colorful",
        hint: "Having much or varied color; bright."
    },
    {
        word: "miracle",
        hint: "A surprising and welcome event that is not explicable by natural or scientific laws."
    },
    {
        word: "summer",
        hint: "The warmest season of the year, occurring between spring and autumn."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "dream",
        hint: "A series of thoughts, images, or emotions occurring during sleep."
    },
    {
        word: "wonder",
        hint: "A feeling of amazement and admiration, caused by something beautiful, remarkable, or unfamiliar."
    },
    {
        word: "laughter",
        hint: "The action or sound of laughing."
    },
    {
        word: "smile",
        hint: "An expression of happiness or amusement."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "joy",
        hint: "A feeling of great pleasure and happiness."
    },
    {
        word: "discovery",
        hint: "The act or process of finding or learning something new."
    },
    {
        word: "blessing",
        hint: "A beneficial thing for which one is grateful; something that brings well-being."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "kindness",
        hint: "The quality of being friendly, generous, and considerate."
    },
    {
        word: "journey",
        hint: "An act of traveling from one place to another."
    },
    {
        word: "peaceful",
        hint: "Free from disturbance; tranquil."
    },
    {
        word: "imagination",
        hint: "The faculty or action of forming new ideas, images, or concepts."
    },
    {
        word: "holiday",
        hint: "A day of festivity or recreation when no work is done."
    },
    {
        word: "freedom",
        hint: "The power or right to act, speak, or think as one wants without hindrance or restraint."
    },
    {
        word: "laughter",
        hint: "The action or sound of laughing."
    },
    {
        word: "kindness",
        hint: "The quality of being friendly, generous, and considerate."
    },
    {
        word: "wonder",
        hint: "A feeling of amazement and admiration, caused by something beautiful, remarkable, or unfamiliar."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "dream",
        hint: "A series of thoughts, images, or emotions occurring during sleep."
    },
    {
        word: "friendship",
        hint: "A relationship of mutual affection between people."
    },
    {
        word: "discovery",
        hint: "The act or process of finding or learning something new."
    },
    {
        word: "joy",
        hint: "A feeling of great pleasure and happiness."
    },
    {
        word: "journey",
        hint: "An act of traveling from one place to another."
    },
    {
        word: "blessing",
        hint: "A beneficial thing for which one is grateful; something that brings well-being."
    },
    {
        word: "peaceful",
        hint: "Free from disturbance; tranquil."
    },
    {
        word: "imagination",
        hint: "The faculty or action of forming new ideas, images, or concepts."
    },
    {
        word: "freedom",
        hint: "The power or right to act, speak, or think as one wants without hindrance or restraint."
    }
];
