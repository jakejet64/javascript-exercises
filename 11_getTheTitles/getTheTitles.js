const getTheTitles = function(input) {
    let ret = input.map(book => {
        return(book.title);
    });
    return ret;
};

// Do not edit below this line
module.exports = getTheTitles;
