// let num = -4.214153262463253;
// let round = 5;

const superRound = (num, round) => {
    let factor = Math.pow(10, round)
    return [
        Math.floor(num * factor) / factor,
        Math.round(num * factor) / factor,
        Math.ceil(num * factor) / factor,
        Math.trunc(num * factor) / factor, 
        +num.toFixed(round)
    ]
};