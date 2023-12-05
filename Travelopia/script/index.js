function toggleDescription() {
    var description = document.getElementById("description");
    var showMoreText = document.getElementById("showBTN");

    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        showMoreText.textContent = "Show Less ↑";
    } else {
        description.style.display = "none";
        showMoreText.textContent = "Show More ↓";
    }
}

window.onload = function() {
    var description = document.getElementById("description");
    description.style.display = "none";
};

document.getElementById("showBTN").addEventListener("click", toggleDescription);
