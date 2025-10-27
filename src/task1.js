function multipliedByN(initialArray, multiplier) {
  const newArray = [];
  
  for (let i = 0; i < initialArray.length; i++) {
    newArray.push(initialArray[i] * multiplier);
  }
  
  return newArray;
}

const initial = [1, 3, 5];
const result = multipliedByN(initial, -2);

console.log(initial); // [1, 3, 5]
console.log(result);  // [-2, -6, -10]
