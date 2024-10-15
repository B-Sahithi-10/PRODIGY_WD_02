// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Modal functionality
const modal = document.getElementById("contactModal");
const openModalButtons = document.querySelectorAll("#openModal");
const closeModalButton = document.querySelector(".close-button");

openModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
