const removeFromArray = function(arr, rem, rem2, rem3, rem4) {
    ret = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== rem && arr[i] !== rem2
            && arr[i] !== rem3 && arr[i] !== rem4){
            ret.push(arr[i]);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
