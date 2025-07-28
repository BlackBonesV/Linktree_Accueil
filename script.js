// --------------------
// PRÉCHARGEMENT VIDÉO Linktree
// --------------------
const bgVideo = document.getElementById("bg-video");
document.body.classList.add("loading"); // Masquer temporairement la vidéo

bgVideo.src = "assets/videos/day.mp4";
bgVideo.load();
bgVideo.play();

// --------------------
// ACCUEIL MAGIQUE
// --------------------
const intro = document.getElementById("intro-screen");
const enterBtn = document.getElementById("enter-button");

enterBtn.addEventListener("click", () => {
  intro.style.opacity = 0;
  intro.style.filter = "blur(10px)";
  setTimeout(() => {
    intro.style.display = "none";
    document.body.classList.remove("loading");
    setTheme("day"); // Appliquer le thème jour
  }, 1000);
});

// Lanternes PNG aléatoires
const lanternContainer = document.getElementById("lantern-container");

for (let i = 0; i < 15; i++) {
  const lantern = document.createElement("div");
  lantern.classList.add("lantern");

  // Position initiale
  lantern.style.left = Math.random() * 100 + "vw";
  lantern.style.bottom = Math.random() * 100 + "vh";

  // Taille aléatoire
  const size = 20 + Math.random() * 30; // entre 20px et 50px
  lantern.style.width = `${size}px`;
  lantern.style.height = `${size}px`;

  // Trajectoire aléatoire
  const duration = 6 + Math.random() * 8; // 6 à 14s
  const offsetX = (Math.random() - 0.5) * 50 + "px";
  lantern.style.setProperty("--x", offsetX);
  lantern.style.animationDuration = duration + "s";
  lantern.style.animationDelay = Math.random() * 5 + "s";

  lanternContainer.appendChild(lantern);
}

// --------------------
// THÈME JOUR / NUIT
// --------------------
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

let currentTheme = "day";

function setTheme(theme) {
  document.body.className = theme;
  currentTheme = theme;

  themeIcon.src = `assets/icons/${theme === "day" ? "sun" : "moon"}.png`;
  themeIcon.alt = theme === "day" ? "Mode jour" : "Mode nuit";

  // Transition douce de la vidéo
  bgVideo.style.opacity = 0;

  setTimeout(() => {
    bgVideo.src = `assets/videos/${theme}.mp4`;
    bgVideo.load();
    bgVideo.play();
  }, 300);

  setTimeout(() => {
    bgVideo.style.opacity = 1;
  }, 600);
}

themeToggle.addEventListener("click", () => {
  const newTheme = currentTheme === "day" ? "night" : "day";
  setTheme(newTheme);
});
