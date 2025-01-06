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
        desc: ["Cloudy Meadows invites players into a whimsical farming world enriched by multiple interconnected systems:",
               "<b>Quest System:</b> Designed a modular quest framework that allows for scalable and customizable objectives, from simple harvesting tasks to multi-step farming adventures.",
               "<b>Tile System:</b> Built a versatile tile-based framework to handle farm plots, resource placement, and terrain modifications with efficient state management.",
               "<b>Item and Inventory System:</b> Developed a robust inventory system with drag-and-drop functionality, item stacking, and contextual interactions for seamless player experience.",
               "<b>Programmable Robots:</b> Introduced helper robots with a custom scripting interface, enabling players to automate repetitive farming tasks. This system includes a simple logic editor for programming behaviors like watering, planting, and harvesting.",
               "This project was a deep dive into systems integration and player-driven automation, making it one of my most technically intricate games."
            ]
    },
    {
        name: "Love Letter Collector",
        imgPath: "assets/love-letter-collector-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/CmErx7FqU",
        linkName: "p5.js",
        desc: ["Love Letter Collector challenges players with precise jumps and unforgiving hazards, built on a solid technical foundation:",
               "<b>Tile System:</b> Created a highly optimized tile-based system to design intricate, pixel-perfect platforming levels with environmental hazards and interactable elements.",
               "<b>Level Editor:</b> Developed an intuitive level editor that supports quick iteration and dynamic testing, enabling both creators and players to craft and share their own devious levels.",
               "<b>Interesting Player Controller:</b> Designed a responsive player controller with fine-tuned physics for tight controls, advanced movement mechanics, and consistent behavior across varying frame rates. Players can also sacrifice health points to temporarily fly, adding a high-risk, high-reward mechanic for bypassing obstacles or reaching hidden areas.",
               "This project highlights my focus on creating challenging gameplay experiences with tools that empower creativity."
            ]
    },
    {
        name: "Nebula Hive Mind",
        imgPath: "assets/nebula-hive-mind.jpg",
        link: "https://zoda39089.itch.io/nebula-hive-mind-reborn",
        linkName: "Itch.io",
        desc: ["Nebula Hive Mind thrusts players into chaotic multiplayer battles, blending cooperative and competitive gameplay with technical innovations:",
               "<b>Multiplayer Architecture:</b> Designed a scalable, low-latency networking system to support real-time battles with numerous players, using predictive algorithms for smooth interactions under fluctuating network conditions.",
               "<b>Dynamic Boss Fights:</b> Introduced server-controlled bosses with adaptive attack patterns and difficulty, reacting to player behavior for coordinated and impactful challenges.",
               "<b>Server-Synced Random Events:</b> Developed synchronized random events, like asteroid storms or power-up spawns, ensuring simultaneous experiences for all players and enhancing unpredictability.",
               "This project pushed my skills in real-time networking, AI design, and synchronized event management."
            ]
    },
    {
        name: "Color Hell",
        imgPath: "assets/color-hell-pic.png",
        link: "https://zoda39089.itch.io/color-hell",
        linkName: "Itch.io",
        desc: ["Color Hell offers a pure arcade shooter experience, focusing on simplicity and fast-paced action:",
               "<b>Streamlined Architecture:</b> Built a straightforward, efficient codebase for rapid iteration and smooth gameplay.",
               "<b>Responsive Controls:</b> Designed a tight player control system to deliver quick, precise responses critical for reflex-driven gameplay.",
               "<b>Visual Clarity:</b> Implemented vibrant visuals and clear feedback mechanics, keeping players immersed in the chaotic action.",
               "Though simple in scope, this project highlights my ability to create polished, engaging gameplay with a focus on core mechanics."
            ]
    },
    {
        name: "Plane Game",
        imgPath: "assets/plane-game-pic.jpg",
        link: "https://zoda39089.itch.io/plane-game",
        linkName: "Itch.io",
        desc: ["Plane Game delivers thrilling arcade flying action, designed specifically for a unique 3D light cube display:",
               "<b>3D Light Cube Integration:</b> Adapted the game for smooth performance on a 3D light cube, emphasizing efficient rendering techniques and spatial awareness.",
               "<b>Honed Game Mechanics:</b> Fine-tuned flight controls and obstacle interactions to provide a satisfying balance of precision and challenge.",
               "<b>Dynamic Enemy Waves:</b> Combined procedurally generated bird patterns with handcrafted enemy waves for varied gameplay and consistent difficulty progression.",
               "This project showcases my skills in hardware-specific optimization, gameplay design, and procedural content blending."
            ]
    },
    {
        name: "F.P.S - Food Plate Spoon",
        imgPath: "assets/FPS-pic.jpg",
        link: "https://virtualnerd1.itch.io/fps-food-plate-spoon",
        linkName: "Itch.io",
        desc: ["Food Plate Spoon (FPS) blends playful chaos with first-person shooting action, built on a strong multiplayer framework:",
               "<b>3D Gameplay:</b> Developed immersive 3D environments and responsive first-person mechanics for smooth navigation and precise aiming.",
               "<b>Multiplayer Architecture:</b> Designed a room-based server system, supporting private and public matches with minimal latency and scalable gameplay.",
               "<b>Room-Based Server System:</b> Implemented dynamic matchmaking for balanced play and efficient resource management.",
               "This project demonstrates my ability to build robust multiplayer systems and deliver polished 3D experiences."
            ]
    },
    {
        name: "Mushroom Game v1",
        imgPath: "assets/Mushroom_game_v1_pic.png",
        link: "https://zoda39089.itch.io/mushroom-game-v1",
        linkName: "Itch.io",
        desc: ["Mushroom Game v1 immerses players in a voxel-based sandbox world filled with exploration and creativity:",
               "<b>Voxel World:</b> Created a destructible and editable voxel environment with optimized chunk loading for seamless interaction.",
               "<b>Inventory System:</b> Designed a drag-and-drop inventory system with crafting support and resource categorization.",
               "<b>Multiplayer Integration:</b> Built a real-time multiplayer framework for collaborative exploration and world-building.",
               "<b>Pixel Art Style:</b> Combined 3D voxels with 2D pixel art textures, creating a nostalgic, visually appealing aesthetic.",
               "This project highlights my ability to integrate procedural world generation, multiplayer systems, and distinct visual design."
            ]
    },
    {
        name: "Greye",
        imgPath: "assets/Greye-pic.png",
        link: "https://zoda39089.itch.io/greye",
        linkName: "Itch.io",
        desc: ["Greye offers a unique twist on the dungeon-crawling genre, blending traditional exploration with innovative mechanics:",
               "<b>Item-Based Rendering:</b> Developed a dynamic rendering system where equipping different items, like specialized 'eyes', alters how players perceive the game world. This mechanic unlocks hidden paths, reveals secrets, or changes the way challenges are approached.",
               "<b>Polished Gameplay:</b> Focused heavily on refining the player experience with smooth controls, intuitive UI, and atmospheric visuals, creating a cohesive and immersive dungeon-crawling adventure.",
               "<b>Dynamic World Interactions:</b> Items don't just change your view but interact with the environment, adding a layer of puzzle-solving to the core exploration and combat mechanics.",
               "This project highlights my ability to integrate innovative mechanics into classic genres while maintaining a polished and engaging player experience."
            ]
    }
]

demosJson = [
    {
        name: "Limbs Demo",
        imgPath: "assets/Cloudy_Meadows-pic.png",
        link: "https://virtualnerd1.itch.io/cloudy-meadows",
        linkName: "Itch.io",
        desc: ["A game about farming on the tops of skyscrapers."]
    },
    {
        name: "Diamond Square Algorithm",
        imgPath: "assets/Diamond-Square-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/w4qYn_kxq",
        linkName: "p5.js Editor",
        desc: ["A demo about using the Diamond Square Algorithm to make random height maps. Reload the page to make a new height map, or look at the code by clicking the < / > symbol on the top right."]
    },
    {
        name: "Team Picker",
        imgPath: "assets/Team-Picker-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/T2ZzWi6Xj",
        linkName: "p5.js Editor",
        desc: ["A demo about a team picker I hope to use in an upcoming game."]
    },
    {
        name: "2.5d Render",
        imgPath: "assets/2-5D-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/RFkkX_HdG",
        linkName: "p5.js Editor",
        desc: ["A demo about how I plan on rendering tiles in 2.5d for an upcoming game."]
    },
    {
        name: "Fishing Mini-Game",
        imgPath: "assets/fishing-minigame-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/wzqZf2EsO",
        linkName: "p5.js Editor",
        desc: ["A demo about a fishing mini-game I made in hopes of using it for Cloudy Meadows. Press E when the black line lines up with the yellow part of the circle."]
    },
    {
        name: "Quests",
        imgPath: "assets/Quest-Demo-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/-WSlAV1hx",
        linkName: "p5.js Editor",
        desc: ["A small game to demo the ability to get and complete quests. The current quest is put in the top right. Click the ball of the same color as your current quest. A to add new quests. Q to open the quest menu to see all active quests."]
    },
    {
        name: "Robots",
        imgPath: "assets/robot-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/qLsxs4IrT",
        linkName: "p5.js Editor",
        desc: ["A demo about a robot system I created that I improved upon to make the current robot system in Cloudy Meadows."]
    },
    {
        name: "Chests",
        imgPath: "assets/chests-pic.png",
        link: "https://editor.p5js.org/Zoda390/full/KacXagSHS",
        linkName: "p5.js Editor",
        desc: ["A demo about a chest system I created that I improved upon to make the current robot system in Cloudy Meadows."]
    },
    {
        name: "Level Editor",
        imgPath: "assets/level-editor.png",
        link: "https://editor.p5js.org/Zoda390/full/icIt1Ra8m",
        linkName: "p5.js Editor",
        desc: ["A very simplistic level editor that I used to make some of the Love Letter Collector Levels."]
    }
]