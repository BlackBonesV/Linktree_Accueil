const enterBtn = document.getElementById('enterBtn');
const transition = document.getElementById('transition');

enterBtn.addEventListener('click', () => {
  transition.style.opacity = 1;

  setTimeout(() => {
    window.location.href = "index.html"; // redirige vers ton Linktree
  }, 1200);
});
