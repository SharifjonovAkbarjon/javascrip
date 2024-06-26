
// masala 1

//   {
//     let numbers = [-5,3,5,-2]

//     let result = []
//     numbers.forEach((son) => {
//         if(son > 0 ){
//             result.push(son)
//         }
//     } )
//     console.log(result);
//   }  


// masala 2

// const reverseString = (word) => {
//     return word
//                 .split("")
//                 .reverse()
//                 .join("")

// }

// console.log( reverseString("salom") )





    // masala 3

    // {
    // const string = (number) => {
    //     return number.toString()
    //                         .split("")
    //                         .reverse("")
    //                         .join("")
    // }
    // console.log(string(123));
    //  }


    // masala 4

    // {
    // let boolean = [true, false, true, false];
    // {
    //   let result = [];
    //   boolean.forEach((son) => (son !== true ? result.push(son) : console.log("")));
    //   console.log(result);
    // }
    // }





    // masala 5

    // {
    //     let numbers = [1,2,3,4,5]

    //     let result = numbers.filter((laylo) => laylo % 2 == 0 )
    //                         .reduce((sum,laylo) => sum + laylo, 0)
    //     console.log (result);
    // }
    

    // masala 6

    // {
    // let array = [5, 2, 3];

    // let result = [];

    // for (let i = 0, len = array.length; i < len; i++) {
    //     result.push(array[i] ** 2);
    // }

    // console.log(result);
    //  }


    // masala 7

    // {
    // let array = [];
    // function son(n) {
    //   for (let i = 1; i <= n; i++) {
    //     array.push(i);
    //   }
    //   return array;
    // }
    // console.log(son(5));
    // }


 
    // masala 8

    {
    function numbers(a, b) {
        let result = [];
        for (let sum = a; sum < b; sum++) {
            if (sum % 2 === 0) {
                result.push(sum);
            }
        }
        return result;
    }
    console.log(numbers(2, 9));
    }


    // masala 9

    {
    function letter(n) {
        return n.charAt(0)
                        .toUpperCase() + n
                        .slice(1);
    }
    console.log(letter("qodir"));
    }



    // masala 10
    // console.log( "salom ".repeat(3) );


    // masala 11

    // {
    //     let numbers = [1,2,3] 
    //     numbers.reverse()
    //     console.log (numbers);
    // }


    // masala 12
    // {
    //     let numbers = [2,1,13,4]
    //     numbers.sort((a,b) => a-b)
    //     console.log(numbers);
    // }


