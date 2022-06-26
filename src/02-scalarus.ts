// ----------- 2.1.Описание простых (скалярных) типов ---------- //

// let num: number;

// num = 1;
// num = -2;
// num = 1.1;
// num = 0;

// let str: string;

// str = 'text';
 
// let bool: boolean;

// bool = true;
// bool = false

// let person = 'Max';
// person = '2';

// // ----------- 2.2. Сложные типы ---------- //

// let arrStr: string[] = [];
// arrStr = [1, 'str']

// let arrNum: number[] = [];
// arrNum = [1, 'str']

// let arrAny: any[] = [];
// arrAny = [1, 'str']

// let arrObject: {name: string}[];
// arrObject =  [{name: 'Alex'}, {name: 'Nikita'}]

// let obj: {name: string};
// // let obj: {};

// obj = { name: 'Alex'}
// obj.name


// let db: {
//     id: number,
//     title: string,
//     info?: {
//         date: Date,
//         isNew?: boolean, 
//     }
// }

// db = {
//     id: 1,
//     title: 'New product',
//     info: {
//         date: new Date()
        
//     }
// }

// ----------- 2.3. Any ---------- //

// let some:any;

// some = 1;
// some = 'str'
// some = true
// some = {
//     name: 'Poly'
// }
// some.name

// let num: number;

// num = some


// ----------- 2.4. Unknown ---------- //

// let some: unknown;

// some = 10;
// some = 'str'

// let str: string;
// if(typeof some === 'string')
// str = some;


// ----------- 2.5. Tuple ---------- //
 
// let fixed: [string, number]

// fixed = ['str', 1]

// fixed.push('new')


// // ----------- 2.6. Enum ---------- //

// enum Toggle {ENABLE, DISABLE}

// const service = {
//     status: Toggle.ENABLE
// }

// if(service.status === Toggle.ENABLE) {
//     console.log('It is active')
// }

// ----------- 2.7. Union Type ---------- //

// let union: number | string | boolean

// union = 1
// union = 'Poly'
// union = true

// function combine(param1: string | number, param2: string | number) {
//     if(typeof param1 === 'string' || typeof param2 === 'string'){
//         return param1.toString() + param2.toString()
//     }
//     return param1  + param2 
// }

// console.log(combine('str', 'Poly'))



// ----------- 2.8. Literal Type ---------- //

// let active: 'start' | 'end';

// active = 'start'

// const fruit: string[] = []

// function workWith(arr: string[], value:string, action: 'add' | 'delete') {
//   if(action === 'add') {
//     arr.push(value)
//   } else {
//     const index = arr.indexOf(value)
//     arr.splice(index, 1)
//   }
//   return arr
// }

// workWith(fruit, 'Bananna', 'add')
// workWith(fruit, 'Melone', 'add')
// workWith(fruit, 'Pear', 'add')
// workWith(fruit, 'Bear', 'add')

// workWith(fruit, 'Bear', 'delete')
// console.log(fruit)


// ----------- 2.9. Возвращаемые типы из функций ---------- //

// function print(): void{
//   console.log('Some log')
// }

// function combine(num1: number,num2: number): number {
//   return num1 + num2
// }

// function customError(): never {
//   throw new Error('some error')
// }

// function createServerPerson(name: string) {
//   return eval(`
//     (() => {
//       return {
//         name: '${name}'
//       }
//     })()
//   ` );
// }

// function createPerson(name: string): {name: string} {
//    return createServerPerson(name)
// }

// const person = createPerson('Leonardo')

// console.log(person)


// ----------- 2.10. Function Type ---------- //

// let foo: (param1: number, param2: string) => void;
// foo = () => {
//   console.log('Some text')
// }

// function culc(num1: number, num2: number, callback: (arr1: number, arrg2: number) => number) {
//     return callback(num1, num2)
// }

// function foo (num1: number, num2: number) {
//     return num1 + num2
// }

// const result = culc(1,2, foo)

// console.log(result)
 


// -----------  2.11. Custom Types  ---------- //

// type Person = {
//   readonly name: string,
//   age?: number,
//   showName: () => void
// }

// const person1: Person = {
//   name: 'Alex',
//   age: 12,
//   showName () {
//     console.log(this.name)
//   }
// }

 

// const person2: Person = {
//   name: 'Max',
//   showName () {
//     console.log(this.name)
//   }
// }

// person1.showName()
// person2.showName()


// ---------- HW -------------- //

// let age: number;
// let name1: string;
// let toggle: boolean;
// let empty: null;
// let notInitialize: undefined;
// let callback: Function;


// let anything: any;
// anything = 'Text';
// anything = {};


// let some: string;
// some = 'Text';

// let str: string;

// str = some;

// let person: [name: string, age: number];


// enum Status {LOADING, READY}

// let union: string | number;

// function showMessage(message: string):void {
//   console.log(message);
// }


// function calc(num1: number, num2: number):number {
//   return num1 + num2;
// }

// function customError():never {
//   throw new Error('Error');
// }


// type Page = {
//   title: string,
//   likes: number,
//   accounts: string[],
//   status: 'open' | 'close',
//   details: {
//     createAt: Date,
//     updateAt: Date,
//   }
// }

// const page2 = {
//   title: 'Python and Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// }

 

