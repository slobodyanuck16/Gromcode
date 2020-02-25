function getAdults (obj) {
    const adults = {};
    for (let age in obj) {
        if (obj[age] >= 18) {
            adults[age] = obj[age];
        }
    }
    return adults;
}