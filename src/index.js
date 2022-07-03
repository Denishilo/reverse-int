module.exports = function reverse(n) {
    let stringOfNumber = String(Math.abs(n));
    let reverseOfString = stringOfNumber.split('').reverse().join('');
    return +reverseOfString;
}
