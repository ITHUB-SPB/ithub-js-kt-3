export function n(inarray) {
    return

    let a = 0;


  let b = inarray.length - 1;

  
  while (a < b) {


    const temp = inarray[a];


    inarray[a] = inarray[b];

    inarray[b] = temp;

    
    a++;

    b--;

  }
  
  console.log(inarray);
}