 //Rest & Splesh Oprator
 //A. Rest Operator
        //  function penjumlahan (a, b, c){
        //      console.log(a);
        //      console.log(b);
        //      console.log(c);
        //  }
        //     penjumlahan(1,2,3,4,5,6);

            // function penjumlahan(a,b, ...Rest){
            //     console.log(a);
            //     console.log(b);
            //     console.log(Rest);
            // }
            // penjumlahan(1,2,3,4,5,6);

//B.Spread Operator (duplikasi array)
        // let numbers = [1,2,3,4,5];

        // let numbers2 = [...numbers]
        // console.log(numbers2);

    //cara yang benar mengunakan spread operator
    // let numbers1 = [1,2,3,];
    // let numbers2 = [4,5,6];

    // //1. cara lama 
    //     let combineNumbers = numbers1.concat(numbers2)
    // //1. cara baru
    // let combineNumbers = [...numbers1, ...numbers2]

// //1. Duplicat object
// let person ={
//     name: "Jhone"
// }
// ler person2 = {...person}