let reports = [];
let users = [];

// Admin account credentials
const adminUsername = 'OfficerGREY1234';
const adminPassword = 'Administrator';
// Function to handle user login
function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');
    const staffActions = document.getElementById('staff-actions');
    const userManagement = document.getElementById('user-management');

    if (username === adminUsername && password === adminPassword) {
        staffActions.style.display = 'block';
        userManagement.style.display = 'block';
        loginMessage.innerHTML = '';
        document.getElementById('login-container').style.display = 'none';
        loadUsers();
    } else {
        loginMessage.innerHTML = 'Invalid username or password. Please try again.';
        staffActions.style.display = 'none
