function multipliedByN(initialArray, multiplier) {
  const newArray = [];
  
  for (let i = 0; i < initialArray.length; i++) {
    newArray.push(initialArray[i] * multiplier);
  }
  
  return newArray;
}
const numbers = [1, 2, 3, 4, 5];
const result = multipliedByN(numbers, 3);
console.log(result);
