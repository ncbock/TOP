const fibonacci = function(num) {
    let fib1 = 0;
    let fib2 = 1;
    let next;
    for (let i = 1; i < num; i++){
        next = fib1 + fib2;
        fib1 = fib2;
        fib2 = next;
    }
    if (num < 0){
        return "OOPS"
    }
    if (num == 1){
        return 1
    }
    return next
};

// Do not edit below this line
module.exports = fibonacci;
