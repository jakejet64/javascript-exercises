const ftoc = function(input) {
  input -= 32;
  input *= (5/9);
  return(Math.round(input * 10) / 10);
};

const ctof = function(input) {
  input *= (9/5);
  input += 32;
  return(Math.round(input * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
