function reverseArray(initialArray) {
  for (let i = 0; i < Math.floor(initialArray.length / 2); i++) {
    const temp = initialArray[i];
    initialArray[i] = initialArray[initialArray.length - 1 - i];
    initialArray[initialArray.length - 1 - i] = temp;
  }
  
  console.log(initialArray);
}

const data = [1, 2, 3, 4, 5];
reverseArray(data); // [5, 4, 3, 2, 1]
console.log(data);  // [5, 4, 3, 2, 1]