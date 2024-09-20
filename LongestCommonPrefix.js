/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let sorted = strs.sort();
    let prefix = "";
    let first = strs[0];
    let last = strs[(strs.length) - 1];

    for(let i =0 ; i<first.length ; i++){
        if(first[i] === last[i]){
            prefix+=first[i];
            
        }
        else{
            break;
        }
    }
    return prefix;
    
};