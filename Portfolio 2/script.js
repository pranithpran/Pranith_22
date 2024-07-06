document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    // You can add your email sending functionality here
});
AOS.init({
    duration: 1200,
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.init("Pranith Yelimala"); // Replace with your EmailJS user ID

    const serviceID = 'service_fypft59'; // Replace with your EmailJS service ID
    const templateID = 'template_mu9qad8'; // Replace with your EmailJS template ID

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send the message. Please try again later.');
            console.log('FAILED...', error);
        });
});
