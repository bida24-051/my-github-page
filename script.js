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


// countdown.js

// Set launch date
var countDownDate = new Date("July 20, 2025 00:00:00").getTime();

var countdownFunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "🚀 It's Live!";
    return;
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);
