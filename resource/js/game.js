function rpgGame() {
  return {
    player: { 
      hp: 100, 
      attack: 20, 
      equipment: GameDB.equipments[0] // Wooden Sword default
    },
    enemy: { ...GameDB.enemies[0] }, // Musuh pertama (Goblin)
    messages: ["Pertarungan dimulai!"],
    actionChosen: null,

    chooseAction(type) {
      this.actionChosen = type;
      this.messages.push(`Player memilih aksi: ${type}`);
    },

    doAttack(type) {
      let damage = this.player.attack + (this.player.equipment?.attack || 0);
      this.enemy.hp -= damage;
      if (this.enemy.hp < 0) this.enemy.hp = 0;

      this.messages.push(`Player menyerang dengan ${type}, damage ${damage}`);
      if (this.enemy.hp <= 0) {
        this.messages.push(`${this.enemy.name} dikalahkan!`);
        this.messages.push(`Loot: ${this.enemy.drops.join(", ")}`);
      }
      this.actionChosen = null;
    },

    doDefend(type) {
      this.messages.push(`Player bertahan dengan ${type}`);
      this.actionChosen = null;
    },

    nextEnemy() {
      const randomEnemy = GameDB.enemies[Math.floor(Math.random() * GameDB.enemies.length)];
      this.enemy = { ...randomEnemy };
      this.messages.push(`Musuh baru muncul: ${this.enemy.name}!`);
    }
  };
}
