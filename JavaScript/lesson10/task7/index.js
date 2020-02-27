function superRound (num,round) {
    let arr = [Math.floor(num * (round * Math.pow(10, round))) / (round * Math.pow(10, round)),
    Math.round(num * (round * Math.pow(10, round))) / (round * Math.pow(10, round)),
    Math.ceil(num * (round * Math.pow(10, round))) / (round * Math.pow(10, round)),
    Math.trunc(num * (round * Math.pow(10, round))) / (round * Math.pow(10, round)),
    num.toFixed(round)]
    return arr;
};