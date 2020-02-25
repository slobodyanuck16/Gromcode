const obj = {'John Doe':19, 'Tom':17,'Bob':18}
function getAdults (obj) {
    let adults = {};
    for (age in obj) {
        if (obj[age] >= 18) {
            adults[age] = obj[age];
        }
    }
    return adults;
}