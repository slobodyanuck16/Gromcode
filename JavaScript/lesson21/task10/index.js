function finishForm() {
    const loginForm = document.querySelector('.login-form');
    const input = document.querySelector('input[name=password]');
    input.setAttribute('name', 'login');
    const passwordForm = document.createElement('input');
    passwordForm.setAttribute('type', 'password');
    passwordForm.setAttribute('name', 'password');
    loginForm.append(passwordForm);
};




export { finishForm };