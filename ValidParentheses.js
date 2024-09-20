/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let counterLeft = 0;
    let counterRight = 0;
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            arr.push(s[i])
            counterLeft++
        }
        else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            counterRight++
            if (s[i] === ')' && arr.pop() === '(') {
                continue;
            }
            else if (s[i] === ']' && arr.pop() === '[') {
                continue;
            }
            else if (s[i] === '}' && arr.pop() === '{') {
                continue;
            }
            else {
                return false
            }
        }
    }
    if (counterLeft !== counterRight) {
        return false;
    }
    return true
};