const levelOne = document.querySelector(".level-1");
const levelTwo = document.querySelector(".level-2");
const levelThree = document.querySelector(".level-3");
const levelFour = document.querySelector(".level-4");
const nextButton = document.querySelector(".next-button");
const getOutCard = document.querySelector(".get-out");
// UI Messages
const uiLevel = document.querySelector(".ui-level");
const uiMessage = document.querySelector(".ui-message");
// End Game
const spookyPic = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream-sound");
const gerilim = document.querySelector(".gerilim-muzik");
const reisler = document.querySelectorAll(".spooky-picture--");

const audioObj = new Audio("./en-iyi-gerilim-muzigi.mp3");
const muzikCal = document.querySelector(".music-button");

muzikCal.addEventListener("click", async () => {
  gerilim.play();
});

const collisionCheck = (value) => {
  if (value === "maze-border") {
    getOutCard.style.display = "block";
  }
  if (value === "finish") {
    nextButton.style.transition = "opacity 0.5s ease";
    nextButton.style.opacity = 1;
    nextButton.style.pointerEvents = "all";
    levelOne.style.pointerEvents = "none";
    levelTwo.style.pointerEvents = "none";
    levelThree.style.pointerEvents = "none";
    levelFour.style.pointerEvents = "none";
  }
  if (value === "end-game") {
    gerilim.pause();
    gerilim.currentTime = 0;
    spookyPic.style.display = "block";
    screamSound.play();
    document.body.style.background = "black";
  }
};

window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
  if (check === "game" || check === "description") {
    getOutCard.style.display = "none";
  }
});

let currentLevel = 0;
nextButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 4);

  reisler[randomNumber].style.display = "block";
  setTimeout(() => {
    reisler[randomNumber].style.display = "none";
  }, 300);

  nextButton.style.transition = "opacity 0s ease";
  nextButton.style.opacity = 0;
  nextButton.style.pointerEvents = "none";
  levelOne.style.pointerEvents = "all";
  levelTwo.style.pointerEvents = "all";
  levelThree.style.pointerEvents = "all";
  levelFour.style.pointerEvents = "all";
  currentLevel++;

  uiLevel.textContent = `Level ${currentLevel + 1}`;
  nextButton.textContent = `Level ${currentLevel + 2}`;
  if (currentLevel === 1) {
    levelOne.style.display = "none";
    levelTwo.style.display = "block";
  } else if (currentLevel === 2) {
    levelTwo.style.display = "none";
    levelThree.style.display = "block";
  } else if (currentLevel === 3) {
    levelThree.style.display = "none";
    levelFour.style.display = "block";
  } else return;
});
