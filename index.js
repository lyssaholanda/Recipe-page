const likeButton = document.getElementById('like');

likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('active');
});

const shareButton = document.getElementById('share');
shareButton.addEventListener('click', function() {
    shareButton.classList.toggle('active');
});