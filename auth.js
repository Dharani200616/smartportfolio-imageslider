// Auth Logic for YoungBot
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const btn = document.getElementById('login-submit');

            // Simple validation
            if (email && password.length >= 6) {
                btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Signing in...';
                btn.disabled = true;

                setTimeout(() => {
                    localStorage.setItem('currentUser', JSON.stringify({ email }));
                    window.location.href = 'dashboard.html';
                }, 1500);
            } else {
                alert('Please enter valid credentials.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('register-submit');
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Creating Account...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Account created successfully! Please sign in.');
                window.location.href = 'login.html';
            }, 2000);
        });
    }
});
