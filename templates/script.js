// Get the button element by its id
var redirectButton = document.getElementById('main_btn');

// Add a click event listener to the button
redirectButton.addEventListener('click', function() {
    // Redirect to the desired page
    window.location.href = 'http://127.0.0.1:5000/predictdata'; // Replace with your desired URL
});