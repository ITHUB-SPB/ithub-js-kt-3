function hasCorrectElement(data, callback) {
  for (let i = 0; i < data.length; i++) {
    if (callback(data[i])) {
      return true;
    }
  }
  
  return false;
}

const array = [1,2,3,4];

console.log(hasCorrectElement(array, (elem) => elem == 3)); // true
console.log(hasCorrectElement(array, (elem) => elem % 5 === 0)); // false