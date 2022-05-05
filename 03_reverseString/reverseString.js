const reverseString = function(input) {
    ret = "";
    for(let i = input.length; i > 0; i--){
        ret += input[i - 1];
    }
    return ret;
};

// Do not edit below this line
module.exports = reverseString;
