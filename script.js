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
    setTheme("day"); // Active le thème par défaut
  }, 1000);
});

// Lanternes SVG aléatoires
const lanternContainer = document.getElementById("lantern-container");

for (let i = 0; i < 12; i++) {                      /*Ajuster le nombre de lanternes*/
  const lantern = document.createElement("div");
  lantern.classList.add("lantern");

  lantern.style.left = Math.random() * 100 + "vw";
  lantern.style.bottom = Math.random() * 100 + "vh";

  const duration = 6 + Math.random() * 8;
  const offsetX = (Math.random() - 0.5) * 50 + "px";

  lantern.style.setProperty("--x", offsetX);
  lantern.style.animationDuration = duration + "s";
  lantern.style.animationDelay = Math.random() * 5 + "s";

  lanternContainer.appendChild(lantern);
}

// --------------------
// THÈME JOUR/NUIT
// --------------------
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const bgVideo = document.getElementById("bg-video");

let currentTheme = "day";

function setTheme(theme) {
  document.body.className = theme;
  currentTheme = theme;

  themeIcon.src = `assets/icons/${theme === "day" ? "sun" : "moon"}.png`;
  themeIcon.alt = theme === "day" ? "Mode jour" : "Mode nuit";

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
