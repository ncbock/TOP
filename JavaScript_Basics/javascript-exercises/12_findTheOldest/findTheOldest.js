const findTheOldest = function(arr) {
    for (let i = 0; i < arr.length; i++){
        if (!('yearOfDeath' in arr[i])){
            date = new Date();
            arr[i]['yearOfDeath'] = date.getFullYear();
        }
    }
    const ordered = arr.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
    return ordered[0]
};

// Do not edit below this line
module.exports = findTheOldest;
