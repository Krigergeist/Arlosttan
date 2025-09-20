let player = {
  hp: 100,
  attack: 20
};

let enemy = null;

// Ambil data musuh dari JSON
fetch('enemies.json')
  .then(res => res.json())
  .then(data => {
    enemy = data[Math.floor(Math.random() * data.length)];
    document.getElementById('enemy-name').innerText = enemy.name;
    document.getElementById('enemy-hp').innerText = enemy.hp;
  });

document.getElementById('attack-btn').addEventListener('click', () => {
  if (!enemy) return;

  // Player menyerang musuh
  enemy.hp -= player.attack;
  log(`Player menyerang ${enemy.name} sebesar ${player.attack} damage`);

  if (enemy.hp <= 0) {
    log(`${enemy.name} dikalahkan! Loot: ${enemy.loot.join(', ')}`);
    document.getElementById('enemy-hp').innerText = 0;
    return;
  }

  document.getElementById('enemy-hp').innerText = enemy.hp;

  // Musuh menyerang player
  player.hp -= enemy.attack;
  log(`${enemy.name} menyerang Player sebesar ${enemy.attack} damage`);
  document.getElementById('player-hp').innerText = player.hp;

  if (player.hp <= 0) {
    log(`Player kalah! Game over.`);
    document.getElementById('player-hp').innerText = 0;
  }
});

function log(message) {
  const logDiv = document.getElementById('log');
  logDiv.innerHTML += `<p>${message}</p>`;
  logDiv.scrollTop = logDiv.scrollHeight;
}
