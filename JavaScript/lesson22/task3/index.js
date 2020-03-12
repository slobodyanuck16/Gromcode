const input = document.querySelector('.text-input');

function textInput () {
    console.log(input.value);
}

input.addEventListener('change', textInput);