
const repeatString = function(string,num) {

    let repeared = "";

    for(let i = 0; i < num; i++){
        
        repeared += string;
    }

    if(num < 0){
        return "ERROR"
    }

    return repeared



};

// не трогайте этот участок кода ниже
module.exports = repeatString;
