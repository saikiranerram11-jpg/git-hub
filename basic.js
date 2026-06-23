// Get button element
const button = document.getElementById("btnClick");

// Add click event
button.addEventListener("click", function () {
    document.getElementById("message").innerText =
        "Congratulations! JavaScript is working.";
});