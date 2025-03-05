document.addEventListener("DOMContentLoaded", function () {
    const dayElement = document.querySelector("#current-day"); 
    const dateElement = document.querySelector("#current-date"); 

    if (dayElement && dateElement) {
        const today = new Date();
        
        const day = today.toLocaleDateString("default", { weekday: "long" });
        const date = today.toLocaleDateString("default", { day: "numeric", month: "long", year: "numeric" });
        
        dayElement.textContent = day; 
        dateElement.textContent = date;
    } else {
        console.error("Date elements not found!");
    }
});
