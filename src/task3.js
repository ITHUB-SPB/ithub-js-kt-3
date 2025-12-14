/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined}
 *
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {
  initialArray.reverse();
  console.log(initialArray);
  return initialArray;
}
