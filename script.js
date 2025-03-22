document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.watch-btn').forEach(button => {
        button.addEventListener('click', function () {
            let videoContainer = this.nextElementSibling;
            let iframe = videoContainer.querySelector('iframe');

            if (!videoContainer.classList.contains("visible")) {
                iframe.src = this.getAttribute('data-video') + "?autoplay=1"; // Play instantly
                videoContainer.classList.add("visible");
                videoContainer.style.display = "block"; // Show video
            } else {
                iframe.src = ""; // Stop video
                videoContainer.classList.remove("visible");
                videoContainer.style.display = "none"; // Hide video
            }
        });
    });
});


// Set your launch date
const launchDate = new Date("2025-07-01T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = launchDate - now;

  if (distance < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "<span class='time-box'>Launched!</span>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    <span class="time-box">${days} <small>Days</small></span>
    <span class="time-box">${hours} <small>Hours</small></span>
    <span class="time-box">${minutes} <small>Minutes</small></span>
    <span class="time-box">${seconds} <small>Seconds</small></span>
  `;
}, 1000);
