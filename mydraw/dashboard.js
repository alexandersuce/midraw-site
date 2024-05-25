document.addEventListener('DOMContentLoaded', () => {
    const recommendationsContainer = document.getElementById('recommendations');

    const imagesByStyle = {
        'Manga': [
            '57386_1715801871941.jpg',
            '57386_1715801897103.jpg',
            'manga 1.jpg',
            'manga 2.jpg',
            'manga 3.jpg',
            'manga 4.jpg',
        ],
        'Réaliste': [
            'réaliste 1.jpg',
            'réaliste 2.jpg',
            'https://i.ytimg.com/vi/c55liJ-ZhSA/maxresdefault.jpg',
            'https://cdn-cpjnb.nitrocdn.com/QUemDNPMnvyKLckhEQXFOXxbJNSKFcjW/assets/images/optimized/rev-2346de7/www.blog-le-dessin.com/wp-content/uploads/2014/06/IMG_0980.jpg',
            'https://www.partfaliaz.com/wp-content/uploads/2014/09/Monica_Lee_illustration1.jpg'
        ],
        'Cartoon': [
            'da 1.jpg',
            'da2.jpg',
            'dessin animé.jpg',
            'cartoon 1.jpg',
            'abstrait 1.jpg',
            'cartoon 3.jpg',
            'https://i.pinimg.com/564x/19/92/55/19925565fa32614a9d1369fdbd855050.jpg',
            'https://png.pngtree.com/png-clipart/20200327/ourlarge/pngtree-rich-bear-cartoon-png-image_2165888.jpg',
            'https://i.pinimg.com/236x/5c/ac/f6/5cacf6dbc5359c4145c6387ed2288dcc.jpg'
        ],
        'abstrait': [
            'abstrait 1.jpg',
            'cartoon 1.jpg',
            'abstrait 2.jpg',
        ],
        'mignon': [
            'https://img.freepik.com/photos-gratuite/chaton-mignon-nuages_23-2150752838.jpg',
            'https://i0.wp.com/www.parentgalactique.fr/wp-content/uploads/2015/08/minions2-e1436523907384-tt-width-604-height-317-bgcolor-000000.jpg',
            'https://e1.pxfuel.com/desktop-wallpaper/465/502/desktop-wallpaper-top-for-cute-disney-stitch-le.jpg',
        ],
    };

    const userPreferences = JSON.parse(localStorage.getItem('userPreferences')) || {};

    Object.keys(userPreferences).forEach(style => {
        if (userPreferences[style] > 0) {
            const styleImages = imagesByStyle[style];
            if (styleImages && styleImages.length > 0) {
                // Afficher la première image de chaque style préféré
                const mainImage = document.createElement('img');
                mainImage.src = styleImages[0];
                mainImage.addEventListener('click', () => openImageInGoogle(styleImages[0]));
                recommendationsContainer.appendChild(mainImage);

                // Afficher cinq autres images du même style
                for (let i = 1; i < Math.min(6, styleImages.length); i++) {
                    const additionalImage = document.createElement('img');
                    additionalImage.src = styleImages[i];
                    additionalImage.addEventListener('click', () => openImageInGoogle(styleImages[i]));
                    recommendationsContainer.appendChild(additionalImage);
                }
            }
        }
    });
});


