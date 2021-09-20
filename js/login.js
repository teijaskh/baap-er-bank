document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const emailFound = emailField.value;
    const passwordField = document.getElementById('user-password');
    const passwordFound = passwordField.value;

    if (emailFound == 'son@father.com' && passwordFound == 'secret') {
        window.location.href = 'banking.html';
    }
})