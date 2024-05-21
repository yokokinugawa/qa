// script.js
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('banner');
    const minimizeButton = document.getElementById('minimize-button');
    const maximizeButton = document.getElementById('maximize-button');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) { // スクロール位置が100pxを超えたら表示
            banner.style.display = 'block';
            setTimeout(() => {
                banner.style.opacity = 1; // opacityを変更してふわっと表示
            }, 10); // 少し遅らせてopacityの変化をアニメート
        }
    });

    minimizeButton.addEventListener('click', () => {
        banner.style.opacity = 0; // opacityを0にして非表示
        setTimeout(() => {
            banner.style.display = 'none';
            maximizeButton.style.display = 'block';
        }, 500); // トランジション時間に合わせて非表示にする
    });

    maximizeButton.addEventListener('click', () => {
        banner.style.display = 'block';
        setTimeout(() => {
            banner.style.opacity = 1; // opacityを1にしてふわっと表示
        }, 10);
        maximizeButton.style.display = 'none';
    });
});


