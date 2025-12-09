function registerUser() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    alert(`Registered successfully!\nEmail: ${email}`);
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    alert(`Logged in successfully!\nEmail: ${email}`);
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}
