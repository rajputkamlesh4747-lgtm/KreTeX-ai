console.log("KreTeX AI Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const aiButton = document.getElementById("ai-assistant-btn");

    if (aiButton) {
        aiButton.addEventListener("click", function () {

            if (window.chatbase && typeof window.chatbase.open === "function") {
                window.chatbase.open();
            }

        });
    }

});
