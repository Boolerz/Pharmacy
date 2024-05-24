document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation
        if (name && email && message) {
            alert('Thank you for your message. We will get back to you shortly.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
