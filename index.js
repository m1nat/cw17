// let user1 = {
//     name: 'Vitaliy',
//     age: 29,
//     sayHello() {
//         console.log(this.name);
//     }
// };

// let user2 = user1;
// user1  = null
// user2.sayHello()

// _____________________________________

// let user1 = {
//     name: 'Vitya',
//     age: 28,

// };

// let user2 = {
//     name: 'Vitya1',
//     age: 20,

// };

// const logName = function () {
//     console.log(this.name);
// };

// user1.sayName = logName;
// user2.sayName = logName

// user1.sayName();
// user2.sayName();
// ___________________________________________

// const User = function(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = () => console.log(`My name is ${this.name}`);
// };

// const user1 = new User('Vitaliy', 29);
// const user2 = new User('Petya', 39);
// user1.sayHello();
// user2.sayHello();

// console.log(user1);
// console.log(user2);

// ________________________________________________________


// class Human {

//     // className = 'Human';
//     static className = 'Human';

//     constructor(head) {
//         this.head = head;
//     }
//     // static sayHuman() {
//     //     console.log('Human!!!');
//     sayHuman() {
//         console.log('Human!!!');
//     }
// }

// class User extends Human {
//     constructor(name, age, head){
//         super(head);
//         this.name = name;
//         this.age = age;
//     }
// }
// const user1 = new User ('Vitaliy', 21, true);
// console.log(user1);
// // user1.sayHuman();
// const user2 = new User ('Vitya', 31, false);
// console.log(user2);
// // user2.sayHuman();

// // console.log(Human.className);
// ____________________________________________________
// class Human {
//     static className = 'Human';

//     constructor(head) {
//         this.head = head;
//     }
// }

// class User extends Human {
   
//     #salary = 10;

//     get salary () {
//         return this.#salary
//     }

//     set salary (value) {
//         console.log(typeof value);
//         this.#salary = value; 
//         if(typeof value === 'number'){
//             this.#salary = value
//         }
//     }

//     constructor(name, age, head){
//         super(head);
//         this.name = name;
//         this.age = age;
//     }
// }
// const user2 = new User ('Vitya', 31, false);
// const user1 = new User ('Vitaliy', 21, true);

// // user1.salary = 20;
// console.log(user1.salary);
// user1.salary = 20;
// console.log(user1.salary);

// ________________________________________________________________

// class Rect {

//     constructor(width, height){
//         this.height = height;
//         this.width = width;
//     }

//     getSquare(){
//         console.log(this.height*this.width);    
//     }
// };

// const x = new Rect(30, 40);
// x.getSquare();
// console.log(x);

// _____________________________________________________________________

class Human {

    constructor(sex){
        this.sex = sex
    }

}




class User extends Human {
    
    constructor(firstName, lastName, sex){
        super(sex);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullname() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

}

const user1 = new User (`Vitaliy`, 'Sinkevich', 'woman');
const user2 = new User (`Vitaliy`, 'Sinkevich','man');
console.log(user1);
console.log(user2);
