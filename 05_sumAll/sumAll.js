const sumAll = function(from, to) {
    if(typeof(from) != "number" || typeof(to) != "number"){
        return("ERROR");
    }
    if(from < 0 || to < 0){
        return("ERROR");
    }
    if(from > to){
        let temp = from;
        from = to;
        to = temp;
    }
    let ret = 0;
    for(let i = from; i <= to; i++){
        ret += i;
    }
    return ret;
};

// Do not edit below this line
module.exports = sumAll;
