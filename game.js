const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
let score = 0;
let timeLeft = 30;
let gameInterval, bubbleInterval;

// Function to generate a bubble
function generateBubble() {
  const bubble = document.createElement("div");
  const size = Math.random() * 40 + 20;  // Random size between 20 and 60px
  const leftPosition = Math.random() * (gameArea.offsetWidth - size);
  const bubbleSpeed = Math.random() * 3 + 2;  // Random speed between 2 and 5 seconds

  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${leftPosition}px`;

  bubble.classList.add("bubble");
  bubble.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`;

  // Random movement direction
  const moveDirection = Math.random() > 0.5 ? "top" : "bottom";
  const animationDuration = bubbleSpeed + 's';

  bubble.style.animation = `moveBubble ${animationDuration} linear infinite`;

  bubble.addEventListener("click", () => {
    // Increase score based on bubble size
    score += Math.floor(size / 10);
    scoreDisplay.textContent = score;
    gameArea.removeChild(bubble);
  });

  gameArea.appendChild(bubble);
}

// Function to handle timer countdown
function startTimer() {
  gameInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(gameInterval);
      clearInterval(bubbleInterval);
      alert(`Game Over! Your final score is ${score}`);
    }
  }, 1000);
}

// Start generating bubbles at intervals
function startGame() {
  startTimer();
  bubbleInterval = setInterval(generateBubble, 1000);
}

startGame();
