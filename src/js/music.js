export function initMusic() {
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  
  if (!bgMusic) return;

  let isMusicPlaying = localStorage.getItem("musicPlaying") === "true";
  bgMusic.volume = 0.3;

  if (isMusicPlaying) {
    bgMusic.play().catch(() => {
      isMusicPlaying = false;
      musicToggle?.classList.remove("playing");
    });
    musicToggle?.classList.add("playing");
  }

  if (musicToggle) {
    musicToggle.addEventListener("click", async () => {
      if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove("playing");
        isMusicPlaying = false;
      } else {
        try {
          await bgMusic.play();
          musicToggle.classList.add("playing");
          isMusicPlaying = true;
        } catch (err) {
          console.log("Audio play blocked:", err);
        }
      }
      localStorage.setItem("musicPlaying", isMusicPlaying);
    });
  }
}
