function getFiniteNumbers(num) {
    return num.filter(item => Number.isFinite(item))
}

function getFiniteNumbersV2(num) {
    return num.filter(item => isFinite(item))
}

function getNaN(num) {
    return num.filter(item => Number.isNaN(item))
}

function getNaNV2(num) {
    return num.filter(item => isNaN(item))
}

function getIntegers(num) {
    return num.filter(item => Number.isInteger(item))
}
