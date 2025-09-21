// gameData.js

const GameDB = {
  enemies: [
    {
      id: 1,
      name: "Goblin",
      hp: 50,
      attack: 10,
      drops: ["Gold Coin", "Rusty Sword"]
    },
    {
      id: 2,
      name: "Orc",
      hp: 120,
      attack: 20,
      drops: ["Iron Axe", "Meat"]
    },
    {
      id: 3,
      name: "Dragon",
      hp: 500,
      attack: 50,
      drops: ["Dragon Scale", "Fire Gem"]
    }
  ],

  equipments: [
    {
      id: 1,
      name: "Wooden Sword",
      type: "weapon",
      attack: 5
    },
    {
      id: 2,
      name: "Iron Sword",
      type: "weapon",
      attack: 15
    },
    {
      id: 3,
      name: "Leather Armor",
      type: "armor",
      defense: 5
    },
    {
      id: 4,
      name: "Iron Armor",
      type: "armor",
      defense: 15
    }
  ]
};
