// let arr1 = [1,2,3,4,5,6,7]
// let myFunc = console.log( getFirst(arr1, 3, 5) ); 

// function getFirst(arr , from, to ){
//     return arr.filter ( (item, i,) =>  {
//        return i > from && i < to;
// })
// };


// const user1 = {
//     firstName: 'Vasya',
//     lastName: 'Pupkin',
//     age: 27
// }
// const user2 = {
//     firstName: 'Leonid',
//     lastName: 'Rogal',
//     age: 25
// }
// const user3 = {
//     firstName: 'Selena',
//     lastName: 'Gomez',
//     age: 23
// }

// const users = [
//     user1,
//     user2,
//     user3
// ];
// ______________________________________________________________________________
// const rangeAge = users.reduce( (acc, item) => {
//     return acc + item.age
// }, 0) / users.length
// console.log(rangeAge);
// _____________________________________________________________________________
// const concatObj = users.map( item =>  ({
//         fullname: `${item.firstName} ${item.lastName}`,
//         age: item.age
// }));
// console.log(concatObj);
// ______________________________________________________________________________
// const names = users.map( item => item.name ) 
// console.log(names)
// _______________________________________________________________________________


// const btn = document.getElementById('btn')
// const removeBtn = document.getElementById('removeBtn')

// removeBtn.onclick = function(){
//     btn.removeEventListener('click', myFunc)
// };

// btn.addEventListener('click', myFunc);

// // btn.addEventListener('click', () => {
// //     console.log('check');
// // });


// // btn.onclick = myFunc;
  
// function myFunc() {
//     console.log('Check');
// }
// __________________________________________________________________________

let par = document.getElementById('result');
btn.addEventListener('click', myFunc);

let x = 0

function myFunc(){
        par.innerHTML = x++;
}
