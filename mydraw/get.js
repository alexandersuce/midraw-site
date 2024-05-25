document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { style: 'Manga', url: '57386_1715801834223.jpg' },
        { style: 'Réaliste', url: 'https://cdn-blog.superprof.com/blog_fr/wp-content/uploads/2017/06/portait-realiste.jpg' },
        { style: 'Cartoon', url: 'https://poptuning.fr/11391-large_default/dessin-adhesif-sticker-cartoon-taz-10.jpg' },
        { style: 'abstrait', url: 'abstrait.jpg' },
        { style: 'mignon', url: 'mignon.jpg' }
    ];
    let currentIndex = 0;
    const userPreferences = {};

    const drawingImage = document.getElementById('drawingImage');
    const dislikeButton = document.getElementById('dislikeButton');
    const likeButton = document.getElementById('likeButton');
    const startCreatingButton = document.getElementById('startCreatingButton');

    function showImage(index) {
        drawingImage.src = images[index].url;
    }

    function savePreference(liked) {
        const currentStyle = images[currentIndex].style;
        if (!userPreferences[currentStyle]) {
            userPreferences[currentStyle] = 0;
        }
        userPreferences[currentStyle] += liked ? 1 : -1;
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex < images.length) {
            showImage(currentIndex);
        } else {
            startCreatingButton.style.display = 'block';
            dislikeButton.style.display = 'none';
            likeButton.style.display = 'none';
        }
    }

    dislikeButton.addEventListener('click', () => {
        savePreference(false);
        nextImage();
    });

    likeButton.addEventListener('click', () => {
        savePreference(true);
        nextImage();
    });

    startCreatingButton.addEventListener('click', () => {
        localStorage.setItem('userPreferences', JSON.stringify(userPreferences));
        window.location.href = 'dashboard.html';
    });

    showImage(currentIndex);
});
