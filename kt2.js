export function calculateSum(values) {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        let num = Number(values[i]);
        if (!isNaN(num)) {
            sum += num;
        }
    }
    return sum;
}