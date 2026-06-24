const Storage = {
    saveUser: (user) => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    },
    getUsers: () => {
        return JSON.parse(localStorage.getItem('users') || '[]');
    },
    setCurrentUser: (user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
    },
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem('currentUser') || 'null');
    },
    logout: () => {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
};

export default Storage;
