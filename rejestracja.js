function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    
    if (username === 'admin' && password === '1234') {
        alert('Zalogowano pomyślnie!');
        window.location.href = 'home.html'; 
    } else {
        alert('Błędne dane logowania!');
    }
}

function register() {
    let newUsername = document.getElementById('register-username').value;
    let newPassword = document.getElementById('register-password').value;
    
    if (newUsername && newPassword) {
        alert('Rejestracja zakończona sukcesem! Możesz się teraz zalogować.');
    } else {
        alert('Proszę wypełnić wszystkie pola.');
    }
}