export function y(inarray, a) {
    for (let i = 0; i < inarray.length; i++){


      inarray[i] *= a


    const newarr = [];



    for (let i = 0; i < inarray.length; i++) {


      newarr.push(inarray[i] * a);


    }
    return inarray;
    return newarr;
  }
}