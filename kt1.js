export function multipliedByN(initialArray, multiplier) {
    let newArray = [];
    for (let i = 0; i < initialArray.length; i++) {
        newArray.push(initialArray[i] * multiplier);
    }
    return newArray;
}