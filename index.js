// class Worker {

//         constructor (name, surname, rate, days){
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//         }

//         getSalary() {
//             return this.rate * this.days
//         }

// }

// const salary = new Worker('Vitaliy', 'Sinkevich', 90, 22);
// console.log(salary.getSalary());
                                    // ____________________________
// class Worker {

//     #name = 'Vitaliy';
//     #surname = 'Sinkevich';
//     #rate = 90;
//     #days = 22;
 
//     get name() {
//         return this.#name
//     }
    
//     get surname() {
//         return this.#surname
//     }
 
//     get rate() {
//         return this.#rate
//     }
 
//     get days() {
//      return this.#days
//     }
 
//          getSalary() {
//              return this.rate * this.days
//          }
 
//  }
 
//  const salary = new Worker();
//  console.log(salary.getSalary());

// ____________________________________________________________________________
// class Worker {

//    #name = 'Vitaliy';
//    #surname = 'Sinkevich';
//    #rate = 90;
//    #days = 22;

//    get name() {
//        return this.#name
//    }
   
//    get surname() {
//        return this.#surname
//    }

//    get rate() {
//        return this.#rate
//    }

//    get days() {
//     return this.#days
//    }

// }

// const worker1 = new Worker();
// console.log(worker1.rate);
// console.log(worker1.days);
// console.log(worker1.name);
// console.log(worker1.surname);
// _________________________________________________________________________________

// class Worker {

//    #name = 'Vitaliy';
//    #surname = 'Sinkevich';
//    #rate = 90;
//    #days = 22;

//    get name() {
//        return this.#name
//    }
   
//    get surname() {
//        return this.#surname
//    }

//    get rate() {
//        return this.#rate
//    }

//     set rate (value) {
//         console.log(typeof value);
//         this.#rate = value; 
//         if(typeof value === 'number'){
//             this.#rate = value
//         }
//     }

//    get days() {
//     return this.#days
//    }

//     set days (value) {
//         console.log(typeof value);
//         this.#days = value; 
//         if(typeof value === 'number'){
//             this.#days = value
//         }
//     }

//              getSalary() {
//              return this.rate * this.days
//          }
 
// }

// worker1.rate = 100
// const salary = new Worker();
// console.log(salary.getSalary());
// const worker1 = new Worker();
// console.log(worker1.rate);
// console.log(worker1.days);
// console.log(worker1.name);
// console.log(worker1.surname);

// ________________________________________________________________________________

class Rectangle {

    constructor(sideA, sideB){
        this.sideA = sideA
        this.sideB = sideB
    }

}

class Parallelepiped extends Rectangle {

    constructor(height, sideA, sideB){
        super(sideA, sideB);
        this.height = height;
    }

    getVolumePar(){
        return this.height * this.sideA * this.sideB
    }
}

let newParallelepiped = new Parallelepiped (10, 5, 7)
console.log('Area of Parallelepiped:', newParallelepiped.getVolumePar());