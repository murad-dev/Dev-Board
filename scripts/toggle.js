document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        if (event.target.id === "Discover-window") {
            window.location.href = "Blog.html";
        } else if (event.target.id === "back-to-desk") {
            window.location.href = "index.html";
        }
    });
});
