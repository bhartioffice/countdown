document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".animated-section");
  if (section) {
    setTimeout(() => {
      section.classList.add("is-visible");
    }, 100);
  }

  const launchDate = new Date("Aug 15, 2025 10:00:00").getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);

    if (distance < 0) {
      clearInterval(interval);
      const countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML =
        "<h2 style='font-family: var(--font-serif); font-size: 2rem; color: var(--accent-color);'>Welcome! The Portfolio is Live.</h2>";
    }
  }, 1000);
});

const audio = document.getElementById("background-audio");
const musicBtn = document.getElementById("music-toggle-btn");

const startMusicOnFirstClick = () => {
  audio.play();
  musicBtn.style.display = "flex";
  window.removeEventListener("click", startMusicOnFirstClick);
};

window.addEventListener("click", startMusicOnFirstClick);

musicBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicBtn.innerHTML = "❚❚ Pause";
  } else {
    audio.pause();
    musicBtn.innerHTML = "▶ Play";
  }
});
