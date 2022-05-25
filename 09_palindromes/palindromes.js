const palindromes = function (input) {
    input = input.toLowerCase();
    input = Array.from(input);
    inputWithoutPunc = [];
    for(let i = 0; i < input.length; i++){
        if(!(input[i] == ' ' || input[i] == ',' || input[i] == '!' || input[i] == '.')){
            inputWithoutPunc.push(input[i]);
        }
    }
    let reversed = [...inputWithoutPunc];
    reversed.reverse();
    return(reversed.join('') == inputWithoutPunc.join(''));
};

// Do not edit below this line
module.exports = palindromes;
