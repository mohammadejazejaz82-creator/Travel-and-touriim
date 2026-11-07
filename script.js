
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const message = document.getElementById("formMessage");

            message.textContent =
                "Thank you! Your message has been received successfully.";

            message.className = "mt-3 text-success fw-bold";

            contactForm.reset();
        });
    }

});
