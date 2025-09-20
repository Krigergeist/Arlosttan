let player = {
  hp: 100,
  attack: 20,
  alive: true
};

let enemy = null;

// Ambil data musuh dari JSON
fetch('enemies.json')
  .then(res => res.json())
  .then(data => {
    enemy = data[Math.floor(Math.random() * data.length)];
    enemy.alive = true; // tambahkan status hidup
    document.getElementById('enemy-name').innerText = enemy.name;
    document.getElementById('enemy-hp').innerText = enemy.hp;
  });

document.getElementById('attack-btn').addEventListener('click', () => {
  if (!enemy || !enemy.alive || !player.alive) return; 
  // kalau salah satu mati → tidak bisa menyerang

  // Player menyerang musuh
  enemy.hp -= player.attack;
  if (enemy.hp <= 0) {
    enemy.hp = 0;
    enemy.alive = false;
    document.getElementById('enemy-hp').innerText = enemy.hp;
    log(`Player menyerang ${enemy.name} sebesar ${player.attack} damage`);
    log(`${enemy.name} dikalahkan! Loot: ${enemy.loot.join(', ')}`);
    return;
  }
  document.getElementById('enemy-hp').innerText = enemy.hp;
  log(`Player menyerang ${enemy.name} sebesar ${player.attack} damage`);

  // Musuh menyerang player (hanya kalau player masih hidup)
  if (player.alive) {
    player.hp -= enemy.attack;
    if (player.hp <= 0) {
      player.hp = 0;
      player.alive = false;
      log(`${enemy.name} menyerang Player sebesar ${enemy.attack} damage`);
      log(`Player kalah! Game over.`);
    } else {
      log(`${enemy.name} menyerang Player sebesar ${enemy.attack} damage`);
    }
    document.getElementById('player-hp').innerText = player.hp;
  }
});

function log(message) {
  const logDiv = document.getElementById('log');
  logDiv.innerHTML += `<p>${message}</p>`;
  logDiv.scrollTop = logDiv.scrollHeight;
}
