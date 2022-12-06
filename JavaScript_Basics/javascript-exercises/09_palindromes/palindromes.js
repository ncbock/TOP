const palindromes = function (str) {
    let replaced = str.replace(/[^a-z]/gi,"");
    let forwardArr = replaced.split("");
    let reversedArr = forwardArr.reverse();
    let reversedStr = reversedArr.join("");

    if (reversedStr.toLowerCase() === replaced.toLowerCase()) {
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
