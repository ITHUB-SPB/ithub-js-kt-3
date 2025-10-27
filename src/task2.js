function calculateSum(values) {
  let sum = 0;
  
  for (let i = 0; i < values.length; i++) {
    const number = Number(values[i]);
    
    if (!isNaN(number)) {
      sum += number;
    }
  }
  
  return sum;
}

const data = ['10','Строка','5g','15','05'];
const result = calculateSum(data);
console.log(result); // 30