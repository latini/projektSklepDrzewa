
document.getElementById('formularzKontaktowy').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const haslo = document.getElementById('haslo').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (storedUser && storedUser.email === email && storedUser.haslo === haslo) {
        alert('Zalogowano pomyślnie!');
        window.location.href = 'panel.html';
    } else {
        alert('Niepoprawny email lub hasło!');
    }
});

document.getElementById('formularzRejestracyjny')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('emailRejestracja').value;
    const haslo = document.getElementById('hasloRejestracja').value;

    if (email && haslo) {
        const newUser = {
            email: email,
            haslo: haslo
        };
        localStorage.setItem('user', JSON.stringify(newUser));
        alert('Rejestracja zakończona sukcesem! Możesz się teraz zalogować.');
        window.location.href = 'login.html';
    } else {
        alert('Wszystkie pola muszą być wypełnione!');
    }
});