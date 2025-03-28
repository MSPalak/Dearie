document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("#loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            if (email === "test@dearie.com" && password === "password123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to the dashboard
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    document.querySelector("#googleLogin").addEventListener("click", function() {
        alert("Google Login (Backend required)");
    });

    document.querySelector("#facebookLogin").addEventListener("click", function() {
        alert("Facebook Login (Backend required)");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.querySelector("#password");
    const showPasswordCheckbox = document.querySelector("#showPassword");

    if (showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("change", function () {
            passwordInput.type = this.checked ? "text" : "password";
        });
    }
});

