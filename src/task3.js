/**
 * @param {any[]} initialArray - Исходный массив
 * @returns {undefined}
 *
 * @description Разворот массива на месте с выводом в консоль
 */
export function reverseArray(initialArray) {
  let left = 0;
  let right = initialArray.length - 1;

  while (left < right) {
    const resultRight = initialArray[left];
    initialArray[left] = initialArray[right];
    initialArray[right] = resultRight;
    
    left++;
    right--;
  }
  console.log(initialArray);
}
