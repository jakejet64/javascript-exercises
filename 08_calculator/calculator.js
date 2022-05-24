const add = function(one, two) {
	return one + two;
};

const subtract = function(one, two) {
	return one-two;
};

const sum = function(one) {
  let ret = 0;
	one.forEach(num => ret += num);
  return ret;
};

const multiply = function(numArray) {
  let ret = 1;
  numArray.forEach(num => ret *= num);
  return ret;
};

const power = function(one, two) {
	let ret = one;
  for(var i = 1; i < two; i++){
    ret *= one;
  }
  return ret;
};

const factorial = function(num) {
	let ret = 1;
  while(num > 1){
    ret *= num;
    num--;
  }
  return ret;
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
