const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");

document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
});

// Show modal (e.g., attach this to a button)
document.getElementById("show-modal").addEventListener("click", function () {
    modal.classList.remove("hidden");
});

// Close modal
modalClose.addEventListener("click", function () {
    modal.classList.add("hidden");
});

document.getElementById("event-search").addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase();
    const events = document.querySelectorAll("#events-container > div");

    events.forEach((event) => {
        const title = event.querySelector("h3").textContent.toLowerCase();
        event.style.display = title.includes(query) ? "block" : "none";
    });
});
