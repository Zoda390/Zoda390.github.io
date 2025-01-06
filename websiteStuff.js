descJson = `
    Hi, I am an game-developer, working mostly with 2d games.
    I have a background in computer science as a Sophomore at Florida Polytechnic University.
    While learning to code games, I tend to make small demos to test out specific systems, and have picked up some skills for making websites.
    I love making game for people to enjoy.
`;
descJson = descJson.replaceAll("\n", "");
descJson = descJson.replaceAll("    ", " ");

gamesJson = [
    {
        name: "Cloudy Meadows",
        imgPath: "assets/Cloudy_Meadows-pic.png",
        link: "https://virtualnerd1.itch.io/cloudy-meadows",
        linkName: "Itch.io",
        desc: "A game about farming on the tops of skyscrapers."
    },
    {
        name: "Love Letter Collector",
        imgPath: "assets/love-letter-collector-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/CmErx7FqU",
        linkName: "p5.js",
        desc: "A game about a new angel collecting love letters."
    },
    {
        name: "Nebula Hive Mind",
        imgPath: "assets/nebula-hive-mind.jpg",
        link: "https://zoda39089.itch.io/nebula-hive-mind-reborn",
        linkName: "Itch.io",
        desc: "A game about killing spaceships to form a great team."
    },
    {
        name: "Color Hell",
        imgPath: "assets/color-hell-pic.png",
        link: "https://zoda39089.itch.io/color-hell",
        linkName: "Itch.io",
        desc: "A game about spawning and dodging colorful bullets."
    },
    {
        name: "Plane Game",
        imgPath: "assets/plane-game-pic.jpg",
        link: "https://zoda39089.itch.io/plane-game",
        linkName: "Itch.io",
        desc: "A game about flying a small plane over the ocean while avoiding the waves and birds."
    },
    {
        name: "F.P.S - Food Plate Spoon",
        imgPath: "assets/FPS-pic.jpg",
        link: "https://virtualnerd1.itch.io/fps-food-plate-spoon",
        linkName: "Itch.io",
        desc: "A game about throwing tomatos, reflecting them with plates, and stabbing people with spoons."
    },
    {
        name: "Mushroom Game v1",
        imgPath: "assets/Mushroom_game_v1_pic.png",
        link: "https://zoda39089.itch.io/mushroom-game-v1",
        linkName: "Itch.io",
        desc: "A topdown 2.5D minecraft clone in which you control a small mushroom."
    },
    {
        name: "Greye",
        imgPath: "assets/Greye-pic.png",
        link: "https://zoda39089.itch.io/greye",
        linkName: "Itch.io",
        desc: "Type: Dungeon Crawler \n Greye offers a unique twist on the dungeon-crawling genre, blending traditional exploration with innovative mechanics: \n Item-Based Rendering: Developed a dynamic rendering system where equipping different items, like specialized "eyes," alters how players perceive the game world. This mechanic unlocks hidden paths, reveals secrets, or changes the way challenges are approached. \n Polished Gameplay: Focused heavily on refining the player experience with smooth controls, intuitive UI, and atmospheric visuals, creating a cohesive and immersive dungeon-crawling adventure. \n Dynamic World Interactions: Items don't just change your view but interact with the environment, adding a layer of puzzle-solving to the core exploration and combat mechanics. \n This project highlights my ability to integrate innovative mechanics into classic genres while maintaining a polished and engaging player experience."
    }
]

demosJson = [
    {
        name: "Limbs Demo",
        imgPath: "assets/Cloudy_Meadows-pic.png",
        link: "https://virtualnerd1.itch.io/cloudy-meadows",
        linkName: "Itch.io",
        desc: "A game about farming on the tops of skyscrapers."
    },
    {
        name: "Diamond Square Algorithm",
        imgPath: "assets/Diamond-Square-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/w4qYn_kxq",
        linkName: "p5.js Editor",
        desc: "A demo about using the Diamond Square Algorithm to make random height maps. Reload the page to make a new height map, or look at the code by clicking the < / > symbol on the top right."
    },
    {
        name: "Team Picker",
        imgPath: "assets/Team-Picker-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/T2ZzWi6Xj",
        linkName: "p5.js Editor",
        desc: "A demo about a team picker I hope to use in an upcoming game."
    },
    {
        name: "2.5d Render",
        imgPath: "assets/2-5D-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/RFkkX_HdG",
        linkName: "p5.js Editor",
        desc: "A demo about how I plan on rendering tiles in 2.5d for an upcoming game."
    },
    {
        name: "Fishing Mini-Game",
        imgPath: "assets/fishing-minigame-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/wzqZf2EsO",
        linkName: "p5.js Editor",
        desc: "A demo about a fishing mini-game I made in hopes of using it for Cloudy Meadows. Press E when the black line lines up with the yellow part of the circle."
    },
    {
        name: "Quests",
        imgPath: "assets/Quest-Demo-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/-WSlAV1hx",
        linkName: "p5.js Editor",
        desc: "A small game to demo the ability to get and complete quests. The current quest is put in the top right. Click the ball of the same color as your current quest. A to add new quests. Q to open the quest menu to see all active quests."
    },
    {
        name: "Robots",
        imgPath: "assets/robot-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/qLsxs4IrT",
        linkName: "p5.js Editor",
        desc: "A demo about a robot system I created that I improved upon to make the current robot system in Cloudy Meadows."
    },
    {
        name: "Chests",
        imgPath: "assets/chests-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/KacXagSHS",
        linkName: "p5.js Editor",
        desc: "A demo about a chest system I created that I improved upon to make the current robot system in Cloudy Meadows."
    },
    {
        name: "Level Editor",
        imgPath: "assets/level-editor.png",
        link: "https://editor.p5js.org/Zoda390/full/icIt1Ra8m",
        linkName: "p5.js Editor",
        desc: "A very simplistic level editor that I used to make some of the Love Letter Collector Levels."
    }
]

/*
{
    name: "Diamond Square Algorithm",
    imgPath: "assets/Diamond-Square-pic.png"
    link: "https://editor.p5js.org/Zoda390/full/w4qYn_kxq",
    linkName: "p5.js Editor",
    desc: "A demo about using the Diamond Square Algorithm to make random height maps. Reload the page to make a new height map, or look at the code by clicking the < / > symbol on the top right."
},
{
    name: "Team Picker",
    imgPath: "assets/Team-Picker-pic.png"
    link: "https://editor.p5js.org/Zoda390/full/T2ZzWi6Xj",
    linkName: "p5.js Editor",
    desc: "A demo about a team picker I hope to use in an upcoming game."
},
{
    name: "2.5d Render",
    imgPath: "assets/2-5D-pic.png"
    link: "https://editor.p5js.org/Zoda390/full/RFkkX_HdG",
    linkName: "p5.js Editor",
    desc: "A demo about how I plan on rendering tiles in 2.5d for an upcoming game."
},
{
    name: "Fishing Mini-Game",
    imgPath: "assets/fishing-minigame-pic.png"
    link: "https://editor.p5js.org/Zoda390/full/wzqZf2EsO",
    linkName: "p5.js Editor",
    desc: "A demo about a fishing mini-game I made in hopes of using it for Cloudy Meadows. Press E when the black line lines up with the yellow part of the circle."
},
{
    name: "Quests",
    imgPath: "assets/Quest-Demo-pic.png"
    link: "https://editor.p5js.org/Zoda390/full/-WSlAV1hx",
    linkName: "p5.js Editor",
    desc: "A small game to demo the ability to get and complete quests. The current quest is put in the top right. Click the ball of the same color as your current quest. A to add new quests. Q to open the quest menu to see all active quests."
},
{
    name: "Robots",
    imgPath: "assets/robot-pic.png"
    link: "https://editor.p5js.org/Zoda390/full/qLsxs4IrT",
    linkName: "p5.js Editor",
    desc: "A demo about a robot system I created that I improved upon to make the current robot system in Cloudy Meadows."
},
{
    name: "Chests",
    imgPath: "assets/chests-pic.png"
    link: "https://editor.p5js.org/Zoda390/full/KacXagSHS",
    linkName: "p5.js Editor",
    desc: "A demo about a chest system I created that I improved upon to make the current robot system in Cloudy Meadows."
},
{
    name: "Level Editor",
    imgPath: "assets/level-editor.png"
    link: "https://editor.p5js.org/Zoda390/full/icIt1Ra8m",
    linkName: "p5.js Editor",
    desc: "A very simplistic level editor that I used to make some of the Love Letter Collector Levels."
}
*/