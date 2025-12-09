// Simple simulation of login and register for now

function registerUser() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    // For now, just alert
    alert(`Registered successfully!\nEmail: ${email}\nPassword: ${password}`);
    // You can later integrate Firebase Auth here
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    // For now, just alert
    alert(`Logged in successfully!\nEmail: ${email}`);
    // You can later redirect to dashboard.html
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}
