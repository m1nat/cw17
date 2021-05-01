// const num = colonOdd(prompt('Enter your number', ));
// console.log(num);


// function colonOdd(num) {
//     let colon = '';

//     for (let i = 0; i < num.length; i++) {
//         if((num[i] % 2 !== 0) && (num[i + 1] % 2 !== 0) && (num[i + 1])){
//             colon += num[i] + ':';
//         } else {
//             colon += num[i];
//         } 
//     }
// return colon
// }

// ___________________________________________________________________________________________________


// let arr = [1, 2, 3 ,4];
// let str = 1;

// function getFirst(array, n) {
//     array.splice(n);
//     n = array.join(' ');
//     return n
// }
// __________________________________________________________________________________________________________
// let x = getFirst(arr, str)
// console.log(x);

// function getFirst(array, n) {
//     let last = array.splice(-n);
//     return last
// }
// _____________________________________________________________________________________________________

// let arr1 = [1, 2,2,2];
// let arr2 = [9, 8, 7, 6, 5, 9, 8, 7, 5];

// function unique(arr) {
//   let sortArr = arr.sort();
//     for(let i = 0; i < sortArr.length; i++) {
//       if (sortArr[i] == sortArr[i + 1]) {
//         let repeatElem = sortArr[i];
//         while (sortArr.indexOf(repeatElem) != -1) {
//           sortArr.splice((sortArr.indexOf(repeatElem)), 1)
//           i--;
//         }
//       }
//     }
// }

// function concatArray(upArr1, upArr2) {
//   let z = unique(upArr1);
//   let y = unique(upArr2);
    // let c = z.concat(y)
    // return c
// }

// let xx = concatArray(arr1, arr2);
// _________________________________________________________________________

// let arr = [55, 22, 33, 12, 16];
// let flag = 0;
// let newArr = sumSqr(arr)
// console.log(newArr);
// function sumSqr(array) {
//   let funcArr = array;
//     for(let i = 0; i < funcArr.length; i++){
//       flag =  flag + (funcArr[i] * funcArr[i])
//     }
//     return flag
// }

// _______________________________________________________________________________

// users = [
//   {
//     userName: 'Vitaliy',
//     userAge: 29
//   },
//   {
//     userName: 'Anatoliy',
//     userAge: 31
//   },
//   {
//     userName: 'Uriy',
//     userAge: 20
//   },
//   {
//     userName: 'Mike',
//     userAge: 16
//   }
// ];

// let result = uppdateArr(users);
// console.log(result);

// function uppdateArr(someOneHardCase) {
//     let funcResult = [];   
//     let x = someOneHardCase;
//     for(let i = 0; i < x.length; i++){
//       let arr1 = [];
//         for(let key in x[i]){
//           arr1.push(x[i][key])
//         }
//         funcResult[i] = arr1
//     }
//     return funcResult
// }
// _____________________________________________________________________________________




// const users = someOneSort([
//   {
//       name: 'Vitaliy',
//       age: 29
//   },
//   {
//       name: 'Petya',
//       age: 17
//   },
//   {
//       name: 'Senya',
//       age: 26
//   },
//   {
//       name: 'Arseniy',
//       age: 20
//   }
// ])
// console.log(users);
// function someOneSort(someOne) {
//     for(let i = 0; i < someOne.length - 1; i++){
//       for(let j = 0; j < someOne.length - 1; j++){
//           if (someOne[j].age > someOne[j + 1].age){
//             let flag  = someOne[j];
//             someOne[j] = someOne[j + 1];
//             someOne[j + 1] = flag;
//           }
//       }
//     }
//     return someOne;
// };

// __________________________________________________________________________


// const users = [
//     {
//         name: 'Vitaliy',
//         age: 29
//     },
//     {
//         name: 'Petya',
//         age: 17
//     },
//     {
//         name: 'Senya',
//         age: 26
//     },
//     {
//         name: 'Arseniy',
//         age: 20
//     }
//   ];

// let result = propertyValue(users, 'name');
// console.log(result);

// function propertyValue(arr, key) {
//     let pushResult = [];
//     for(let i = 0; i < arr.length; i++) {
//         pushResult.push(arr[i][key]);
//     }
//     return pushResult
// }
// _____________________________________________________________________________________

const users = [
    {
        name: 'Vitaliy',
        age: 29
    },
    {
        name: 'Petya',
        age: 17
    },
    {
        name: 'Senya',
        age: 26
    },
    {
        name: 'Arseniy',
        age: 20
    }
  ];

let result = propertyValue(users, 'name');
console.log(result);
function propertyValue(arr, key) {
    let arrFunc = arr;
    arrFunc.reduce( (acc, item, i, arr) =>{
        return acc, arr[i] = arr[i][key]
    }, [])
    return arrFunc
  }