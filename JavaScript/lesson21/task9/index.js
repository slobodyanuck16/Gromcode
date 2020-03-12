function finishList() {
    const list = document.querySelector('ul');
    const special = document.querySelector('.special');

    const li1 = document.createElement('li');
    li1.textContent = '1';

    const li3 = document.createElement('li');
    li3.textContent = '3';


    const li5 = document.createElement('li');
    li5.textContent = '5';

    const li8 = document.createElement('li');
    li8.textContent = '8';

    list.prepend(li1);
    special.before(li3)
    special.after(li5)
    list.append(li8);

};




export { finishList };