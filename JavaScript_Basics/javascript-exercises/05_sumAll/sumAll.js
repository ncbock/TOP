const sumAll = function(a , b) {
    let sumNumbers = 0;
    if (typeof(a) !== 'number' || typeof(b) !== 'number' ||
       a < 0 || b < 0){
        return "ERROR"
       }
    if (a < b){
        for (let i = a; i <= b; i++){
            sumNumbers += i;
            }
    } else {
        for (let i = b; i <= a; i++){
            sumNumbers += i;
        }
    }
    return sumNumbers;

};

// Do not edit below this line
module.exports = sumAll;
