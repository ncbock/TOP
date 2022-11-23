const repeatString = function(str, num) {
    let addedString = ""
    if (num < 0){
        return "ERROR"
    }
    for (let i =0; i < num; i++) {
        addedString += str;
    }
    return addedString

};

// Do not edit below this line
module.exports = repeatString;
