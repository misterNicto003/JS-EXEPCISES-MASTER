const removeFromArray = function (array, ...args) {


    return array.filter((item) => !args.includes(item))


};

// не трогай код ниже
module.exports = removeFromArray; 
