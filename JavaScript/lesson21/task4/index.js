function getTitle() {
    const titleElement = document.querySelector('.title');
    return titleElement.textContent;
}

function getDescription() {
    const aboutElement = document.querySelector('.about');
    return aboutElement.innerText;
}

function getPlans() {
    const plansElement = document.querySelector('.plans');
    return plansElement.innerHTML;
}

function getGoal() {
    const goalElement = document.querySelector('.goal');
    return goalElement.outerHTML;
}

export { getTitle, getDescription, getPlans, getGoal };