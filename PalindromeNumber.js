/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let y = String(x)
    y = y.split('').reverse().join('');
    return x == y
};