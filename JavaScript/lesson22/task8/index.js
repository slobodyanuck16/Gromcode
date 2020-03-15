const inp = document.querySelector('.text-input');

const textInput = () => {
        console.log(inp.value);
    }

inp.addEventListener('change', textInput)