function manageClasses() {
    const oneLi = document.querySelector('.one')
    oneLi.classList.add('selected');

    const twoLi = document.querySelector('.two')
    twoLi.classList.remove('selected');

    const threeLi = document.querySelector('.three')
    threeLi.classList.remove('three_done');

    const fourLi = document.querySelector('.four')
    if (document.getElementsByTagName('some-klass')) {
        fourLi.classList.add('another_class');
    }
};

export { manageClasses }