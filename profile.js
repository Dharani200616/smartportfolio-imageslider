// Profile Management
document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = profileForm.querySelector('button[type="submit"]');
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Saving...';
            btn.disabled = true;

            setTimeout(() => {
                alert('Profile updated successfully!');
                btn.innerHTML = 'Save Changes';
                btn.disabled = false;
            }, 1500);
        });
    }
});
