document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.watch-btn').forEach(button => {
        button.addEventListener('click', function () {
            let videoContainer = this.nextElementSibling;
            let iframe = videoContainer.querySelector('iframe');

            if (videoContainer.style.display === 'none' || videoContainer.style.display === '') {
                iframe.src = this.getAttribute('data-video');
                videoContainer.style.display = 'block';
            } else {
                iframe.src = '';
                videoContainer.style.display = 'none';
            }
        });
    });
});
