const convertToCelsius = function(fahrenheit) {
  let celsia  = (fahrenheit-32)* 5/9

  return +celsia.toFixed(1)


  
};

const convertToFahrenheit = function(celsia) {
  let fahrenheit = celsia * 9/5+32
  return +fahrenheit.toFixed(1)
};

// это тоже нельзя (!)
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
