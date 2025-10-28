export function reverseArray(initialArray) {
    let reversed = [];
    for (let i = initialArray.length - 1; i >= 0; i--) {
        reversed.push(initialArray[i]);
    }
    
    
    for (let i = 0; i < initialArray.length; i++) {
        initialArray[i] = reversed[i];
    }
    
    console.log(initialArray);
}