/**
 * @param {string[]} values - Массив строк
 * @returns {number} Сумма по численным данным
 *
 * @description Подсчет суммы элементов массива,
 * корректно переводимых из строки в численный вид.
 */
export function calculateSum(values) {
  if (values.length === 0) {
    throw new Error("Передан пустой массив");
  }

  let sumNum = 0;
  let checkNumbers = false;

  for (let i = 0; i < values.length; i++) {
    const num = Number(values[i]);
    if (!isNaN(num)) {
      sumNum += num;
      checkNumbers = true;
    }  
  }
  if (!checkNumbers) {
      throw new Error("Отсутствуют численные данные в массиве!");
    }
    
  return sumNum;
}
