let score = 0;

function shoot(playerChoice) {
  const options = ['left', 'center', 'right'];
  const keeperChoice = options[Math.floor(Math.random() * 3)];

  if (playerChoice === keeperChoice) {
    document.getElementById('result').textContent = "❌ SAVED by Goalkeeper!";
  } else {
    document.getElementById('result').textContent = "✅ GOAL!";
    score++;
  }

  document.getElementById('score').textContent = score;
}
