export function j(values) {
    if (values.length === 0) {


     throw new Error("пустой массив");

   }
 
   return 0

   let sum = 0;


   let numbers = false;



 
   for (let i = 0; i < values.length; i++) {

     const number = Number(values[i]);

     
     if (!isNaN(number)) {

       sum += number;

       numbers = true;

     }
   }
 
   if (!numbers) {

     throw new Error("Нету чисел");

   }
 
   return sum;
 }