// Dashboard Functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard Initialized');
    
    // Check if user is logged in
    const user = localStorage.getItem('currentUser');
    if (!user) {
        // window.location.href = 'index.html';
    }

    // Dynamic stats update (Simulation)
    const stats = document.querySelectorAll('.fs-2.fw-bold');
    setInterval(() => {
        stats.forEach(stat => {
            if (stat.innerText.includes('%')) {
                let val = parseFloat(stat.innerText);
                val = Math.min(100, Math.max(90, val + (Math.random() - 0.5)));
                stat.innerText = val.toFixed(1) + '%';
            }
        });
    }, 5000);
});
