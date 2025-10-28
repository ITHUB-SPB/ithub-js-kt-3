function reverseArray(initialArray) {
  for (let i = 0; i < Math.floor(initialArray.length / 2); i++) {
    const temp = initialArray[i];
    initialArray[i] = initialArray[initialArray.length - 1 - i];
    initialArray[initialArray.length - 1 - i] = temp;
  }
  
  console.log(initialArray);
}

const data = [1, 2, 3, 4, 5];
reverseArray(data);
console.log(data);
