/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let temp = "";
    x = x.toString();
    let firstIndex = 0
    if (isNegative(Number(x))) {
        firstIndex = 1
    }
    for (let i = x.length - 1; i >= firstIndex; i--) {
        temp += x[i];
    }
    if (1 === firstIndex) {
        return Number(temp) * -1
    }
    return Number(temp)
};

var isNegative = (x) => {
    return x < 0
}



