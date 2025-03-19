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
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error messages
    errorMessage.textContent = '';

    // Validation
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        return;
    }

    // Success (simply logging for now)
    alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}`);
});

