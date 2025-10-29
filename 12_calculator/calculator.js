const add = function (number1, number2) {
  return number1 + number2
};


const subtract = function (number1, number2) {
  return number1 - number2
};


const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length > 1) {
    return arr.reduce((acc, cv) =>
      acc += cv
      )
  }else {
    return arr[0]
  }
};

const multiply = function (arr) {
  return arr.reduce((acc, curval) => acc * curval)
};

const power = function (number1, number2) {
  return number1 ** number2
};


const factorial = function (number) { 
  if(number == 0){
    return 1;
  }else{
    let ini = number;
    for(let x = number; x > 1; x--){
      ini = ini * (x - 1)
    }
      return ini

  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
