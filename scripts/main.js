document.addEventListener("DOMContentLoaded", function () {
    const taskAssignedElement = document.getElementById("task-assigned");
    const completedTaskElement = document.getElementById("total-completeTask");
    const historyDiv = document.getElementById("history");
    const completedButtons = document.querySelectorAll(".btn_completed");
    const clearHistoryBtn = document.getElementById("clear-history-btn");

    const defaultTaskAssigned = 6;

    taskAssignedElement.innerText = defaultTaskAssigned;
    completedTaskElement.innerText = "0";

    completedButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            let assignedCount = parseInt(taskAssignedElement.innerText);
            let completedCount = parseInt(completedTaskElement.innerText);

            if (assignedCount > 0) {
                taskAssignedElement.innerText = assignedCount - 1;
            }

            completedTaskElement.innerText = completedCount + 1;

            const taskName = this.closest(".card").querySelector("h3").innerText;
            const message = document.createElement("p");
            message.innerHTML = `You successfully completed <strong>${taskName}</strong> on 21 March 2025`;
            historyDiv.appendChild(message);

            this.disabled = true;
            this.innerText = "Completed";
            this.style.backgroundColor = "#ccc";
        });
    });

    clearHistoryBtn.addEventListener("click", function (event) {
        event.preventDefault();

        console.log("Clear History button clicked!");

        const historyMessages = historyDiv.querySelectorAll("p:not(:first-child)");
        historyMessages.forEach(msg => msg.remove());

        taskAssignedElement.innerText = defaultTaskAssigned;
        completedTaskElement.innerText = "0";

        completedButtons.forEach(button => {
            button.disabled = false;
            button.innerText = "Completed";
            button.style.backgroundColor = "";
        });

        clearHistoryBtn.innerText = "Clear History";
    });
});
