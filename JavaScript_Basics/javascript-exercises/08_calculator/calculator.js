const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(arry) {
	let sum = 0;
  for (let i = 0; i < arry.length; i++){
    sum += arry[i];
  }
  return sum;
};

const multiply = function(arry) {
  let prod = 1;
  for (let i = 0; i < arry.length; i++){
    prod *= arry[i]
  }
  return prod
};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(num) {
  let prod = 1
  if (num === 0 || num === 1){
    return 1
  }
  for (let i = 1; i <= num; i++){
    prod *= i;
  }
  return prod
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
