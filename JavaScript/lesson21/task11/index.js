function manageClasses () {
    const oneLi = document.querySelector('.one')
    oneLi.classList.add('selected');

    const twoLi = document.querySelector('.two')
    twoLi.classList.remove('selected');

    const threeLi = document.querySelector('.three')
    threeLi.classList.remove('three_done');

    const fourLi = document.querySelector('.four')
    fourLi.classList.add('another_class');
};

export {manageClasses}