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
  let sum = 0;
  let NunbersIsValid = false;

  for (const value of values) {
    const num = +value;
    if (!isNaN(num)) {
      sum += num;
      NunbersIsValid = true;
    }
  }

  if (!NunbersIsValid) {
    throw new Error("Отсутствуют численные данные");
  }

  return sum;
}
