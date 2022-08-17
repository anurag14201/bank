

document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPass = passwordField.value;
    // console.log(userPass);

    if (userEmail == 'baperbank@gmail.com' && userPass == 'bank1234') {

        window.location.href = 'bank.html';

    }
});

