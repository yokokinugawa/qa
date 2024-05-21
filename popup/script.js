// script.js
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('banner');
    const minimizeButton = document.getElementById('minimize-button');
    const maximizeButton = document.getElementById('maximize-button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // スクロール位置が100pxを超えたら表示
            banner.style.display = 'block';
        }
    });

    minimizeButton.addEventListener('click', () => {
        banner.style.display = 'none';
        maximizeButton.style.display = 'block';
    });

    maximizeButton.addEventListener('click', () => {
        banner.style.display = 'block';
        maximizeButton.style.display = 'none';
    });
});
