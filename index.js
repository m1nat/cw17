// setTimeout( () => console.log('Time'), 0);

// setInterval(() => {
//     console.log('Interval');
// }, 1000);


// const myInterval = setInterval(() => console.log('Interval'), 1000);
// setTimeout(() => {
//     console.log('Finish');
//     clearInterval(myInterval);
// }, 3000);




// const printNumber = (from, to) => {
//     let count = from;
//     const iterval = setInterval(() => {
//         console.log(count);
//         count++;

//         if(count === to + 1) {
//             clearInterval(iterval)
//         }

//      }, 1000)
// }

// printNumber(1, 5);


// console.log('Begin');
// setTimeout(() => {
//     console.log('Start loading');
//     setTimeout(() => {
//         console.log('Data recieved');
//         setTimeout(() => {
//             console.log('Complete loading!');
//         }, 1500)
//     }, 1500)
// }, 1500);


// const startPromise = () => new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('startPromise');
//         resolve();
//     }, 5000)
// })

// const midlePromise = () => new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('midlePromise');
//         resolve();
//     }, 2000)
// })

// const endPromise = () => new Promise ( (resolve, reject) => {
//     setTimeout( () => {
//         console.log('endPromise');
//         resolve();
//     }, 2000)
// })

// startPromise()
//     .then(() =>  startPromise())
//     .then(() => endPromise());

// Promise.all([startPromise(), midlePromise(), endPromise()])
//     .then(() => console.log('ALL'))
// Promise.race ([startPromise(), midlePromise(), endPromise()])
//     .then(() => console.log('RACE'));


const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch(URL)
//     .then(response => response.json())
//     .then(json => console.log(json))


// const getTodos = () => {
    //     delay(3000)
    //         .then( () => fetch(URL))
    //         .then(response => response.json())
    //         .then( json => console.log(json));
    // }
    
    // getTodos();


const delay = ms => new Promise (resolve => setTimeout ( () => resolve(), ms))

const fetchTodos = () => fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json));

const getTodos = async () => {
    await delay(3000);
    await fetchTodos();
}

getTodos()





















// class TestClass {
//     constructor(func){
//         this.func = func
//     }
// }

// const testClass = new TestClass(() => console.log('test'))
// testClass.func();
