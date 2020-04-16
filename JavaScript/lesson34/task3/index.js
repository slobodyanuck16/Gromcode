const baseUrl = 'https://5e97f8bc77f5430016339cb5.mockapi.io/api/v1/loginForm'

const inp = document.querySelectorAll('input');
const errorText = document.querySelector('.error-text');
const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');

const reportValidation = () => {
    if (loginForm.reportValidity())
        submitBtn.disabled = false;
    else submitBtn.disabled = true;
};

loginForm.addEventListener('input', reportValidation);

const validationUser = e => {
    e.preventDefault();

    const userValue = [...new FormData(loginForm)]
        .reduce((email, [name, pass]) =>
            ({...email, [name]: pass }), {});

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userValue)
        })
        .then(response => response.json())
        .then(data => {
            inp.forEach(elem => elem.value = '');
            alert(JSON.stringify(data));
        })
        .catch(() => {
            errorText.textContent = 'Failed to create user';
        });

}

submitBtn.addEventListener('click', validationUser);