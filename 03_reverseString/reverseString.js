const reverseString = function(str, num) {
    let revers = "";

    for(let i = str.length -1;i >=0; i-- ){
        revers +=str[i];

    }
    return revers
}
 
const newStr = reverseString(" ")




// не трогаем код ниже
module.exports = reverseString;
