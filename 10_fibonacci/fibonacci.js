const fibonacci = function(input) {
    if(input < 1){
        return "OOPS";
    }
    input = parseInt(input);
    let num1 = 1;
    let num2 = 1;
    let ret = 1;
    while(input > 2){
        ret = num1 + num2;
        num1 = num2;
        num2 = ret;
        input--;
    }
    return ret;
};

// Do not edit below this line
module.exports = fibonacci;
