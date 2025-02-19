const findTheOldest = function(input) {
    const currentYear = new Date().getFullYear();
    let oldestSoFar = input[0];
    input.forEach(person => {
        if(isNaN(person.yearOfDeath)){
            person.yearOfDeath = currentYear;
        }
        const curOldest = oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth;
        const personAge = person.yearOfDeath - person.yearOfBirth;
        if(personAge > curOldest) {
            oldestSoFar = person;
        }
    });
    return oldestSoFar;
};

// Do not edit below this line
module.exports = findTheOldest;
