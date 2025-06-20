
    let score_p = 0;
    let score_c = 0;
    let name = "Player";
  
   
    const nameInput = document.getElementById("name");
    const playerDisplay = document.getElementById("player");
    const computerDisplay = document.getElementById("computer");
    const resultBox = document.getElementById("result");
    const playSection = document.querySelector(".play");
    const startScreen = document.querySelector(".startScreen");
    const endButton = document.querySelector(".end");
    const restartBtn = document.querySelector(".restart");
    const heading = document.querySelector("h1");
  
    function start() {
      name = nameInput.value || "Player";
      playerDisplay.innerHTML = `${name} : ${score_p}`;
      playSection.style.display = "block";
      resultBox.style.display = "block";
      endButton.style.display = "block";
      startScreen.style.display = "none";
    }
  
    function updateScore() {
      playerDisplay.innerHTML = `${name} : ${score_p}`;
      computerDisplay.innerHTML = `Computer : ${score_c}`;
    }
  
    function play(option) {
      const opt = ['rock', 'paper', 'scissor'];
      const computer = opt[Math.floor(Math.random() * 3)];
  
      if (computer === option) {
        resultBox.innerHTML = "It is a tie";
        resultBox.style.backgroundColor = 'rgb(161, 137, 0)';
      } else if (
        (computer === 'rock' && option === 'scissor') ||
        (computer === 'scissor' && option === 'paper') ||
        (computer === 'paper' && option === 'rock')
      ) {
        resultBox.innerHTML = `${option} vs ${computer} `;
        score_c++;
        resultBox.style.backgroundColor = 'red';
      } else {
        resultBox.innerHTML = `${option} vs ${computer} `;
        score_p++;
        resultBox.style.backgroundColor = 'green';
      }
  
      updateScore();
    }
  
    function end() {
      if (score_p > score_c) {
        resultBox.innerHTML = `You are the Winner`;
        resultBox.style.backgroundColor = 'green';
        confetti();
      } else if (score_p < score_c) {
        resultBox.innerHTML = `Computer is the Winner`;
        resultBox.style.backgroundColor = 'red';
      } else {
        resultBox.innerHTML = `It is a Tie`;
        resultBox.style.backgroundColor = 'rgb(161, 137, 0)';
      }
  
      playSection.style.display = "none";
      restartBtn.style.display = "block";
    }
  
    function reset() {
      score_p = 0;
      score_c = 0;
      resultBox.innerHTML = "Choose the option above";
      resultBox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      updateScore();
    }
  
    function restart() {
      heading.style.display = "block";
      startScreen.style.display = "block";
      restartBtn.style.display = "none";
      resultBox.style.display = "none";
        reset();
    }
 
