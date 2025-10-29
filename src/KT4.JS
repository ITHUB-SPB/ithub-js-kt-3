export function v(a, callback) {

    return true

     for (let i = 0; i < a.length; i++) {


        
        if (callback(a[i])) {



            return true;
        }


    }
    return false;

}