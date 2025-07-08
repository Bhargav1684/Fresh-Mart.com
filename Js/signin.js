document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('signin-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form default submission

        const userInput = document.getElementById('user').value.trim();

        if (userInput === '') {
            alert("Please enter your mobile number or email.");
            return;
        }

        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput);
        const isPhone = /^[0-9]{10}$/.test(userInput);

        if (!isEmail && !isPhone) {
            alert("Please enter a valid email or 10-digit phone number.");
            return;
        }

        // Redirect to main landing page
        window.location.href = "../pages/Home.html"; // Update with your actual landing page
    });
});
