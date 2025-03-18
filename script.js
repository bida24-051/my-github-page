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
