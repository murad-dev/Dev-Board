document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById('theme-change-btn');

    const colors = ["#f0c09e", "#56cf6c", "#535e8e", "#8c7b35", "#bb87d1", "#505e6c", "#FFFFFF"];
    let colorIndex = 0;

    themeButton.addEventListener("click", function () {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });
});
