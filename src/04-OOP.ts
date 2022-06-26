
// ----------- 4.1. Конструктор ---------- //

// class House {
//     street: string;

//     constructor (n: string) {
//         this.street = n

//     }
// }

// const house = new House('Volkova')

 


// ----------- 4.2. Методы ---------- //


// class House {
//     street: string;

//     constructor (n: string) {
//         this.street = n
//     }
//     showAdress(this: House, add: string): void {
//         console.log('Adress ' + this.street + ' ' + add)
//     }
// }

// const house = new House('Volkova')

 
// const copyHouse = { showAdress: house.showAdress , street: 'newAdress'}
// copyHouse.showAdress('string')

// ----------- 4.3. Модификаторы доступа ---------- //


// class House {
//     private street: string;
//     private tenants: string[] = [];

//     constructor (n: string) {
//         this.street = n
//     }
//     showAdress(this: House): void {
//         console.log('Adress ' + this.street)
//     }

//     public addTenant(name: string) {
//         this.tenants.push(name)
//     }
//     public showTenant() {
//         console.log(this.tenants)
//     }
// }

// const house = new House('Volkova')
// house.addTenant('Andrew')
// house.addTenant('John')
// house.tenants.push('Antoy')
// house.showTenant()


// ----------- 4.4. Сокращение инициализации ---------- //



// class House {
    
//     private tenants: string[] = [];
    

//     constructor (private type: string, private street: string) {
        
//     }
//     showAdress(this: House): void {
//         console.log('Adress ' + this.street)
//     }
    
//     showType(this: House): void {
//         console.log('Type: ' + this.type)
//     }

//     public addTenant(name: string) {
//         this.tenants.push(name)
//     }
//     public showTenant() {
//         console.log(this.tenants)
//     }
// }

// const house = new House('wooden ','Volkova')
// house.addTenant('Andrew')
// house.addTenant('John')
// // house.tenants.push('Antoy')
// house.showTenant()
// house.showAdress()
// house.showType()


// console.log(house.type)



// ----------- 4.5. Readonly ---------- //


// class House {
    
//     private tenants: string[] = [];
    

//     constructor (public readonly type: string, private street: string) {
        
//     }
//     showAdress(this: House): void {
//         console.log('Adress ' + this.street)
//     }
    
//     showType(this: House): void {
//         console.log('Type: ' + this.type)
//     }

//     public addTenant(name: string) {
//         this.tenants.push(name)
//     }
//     public showTenant() {
//         console.log(this.tenants)
//     }
// }


// const house = new House('wooden ','Volkova')

// house.type = ''
// console.log(house.type)


// ----------- 4.6. Наследование ---------- //


// class House {
    
//     private tenants: string[] = [];
    

//     constructor (public readonly type: string, protected street: string) {
        
//     }
//     showAdress(this: House): void {
//         console.log('Adress ' + this.street)
//     }
    
//     showType(this: House): void {
//         console.log('Type: ' + this.type)
//     }

//     public addTenant(name: string) {
//         this.tenants.push(name)
//     }
//     public showTenant() {
//         console.log(this.tenants)
//     }
// }

// class StoneHouse  extends House{
//     private chargeOfTheHouse: string;
//     constructor(street: string, general: string) {
//         super('stone', street)

//         this.chargeOfTheHouse = general;
//     }
//     public showTenant(): void {
//         console.log("General:" + this.chargeOfTheHouse)

//         super.showTenant();
//     }
//     showAdress(): void {
//         console.log('Adress ' + this.street)
//     }
// }

// const stoneHouse = new StoneHouse('StoneWorld', 'John')

// stoneHouse.addTenant('Peter')
// stoneHouse.addTenant('Leo')

// stoneHouse.showTenant()



// ----------- 4.7. Статические методы и свойства ---------- //


// class UseStatic {
//     private static count = 0;

//     constructor() {
//         UseStatic.count += 1;
//     }

//     public static isStaticMethod () {
//         console.log('I am static')
//     }
//     public showCount () {
//         console.log(UseStatic.count)
//     }
// }

// const obj1 = new UseStatic()
// const obj2 = new UseStatic()
// const obj3 = new UseStatic()

// obj1.showCount()
// obj2.showCount()
// obj3.showCount()

// UseStatic.isStaticMethod()

// function count () {

// }

// function substringCustom () {

// }

// class MyLib {
//     public static count() {

//     }
//     public static substringCustom() {

//     }
// }

// MyLib.count()
// MyLib.substringCustom()


// ----------- 4.8. Abstract classes ---------- //

// abstract class Aircraft {
//     protected pilotInCockpit = false;

//     public sitInPlane() {
//         this.pilotInCockpit = true;
//     }

//     public abstract startEngine (): string;
// }
     
// class Maize extends Aircraft {
//      public startEngine() {
//          return 'Ta-ta-ta'
//      }
// }

// class Embraer extends Aircraft {
//     public startEngine() {
//         return 'Vuuuu'
//     }
// }

// const maize = new Maize()
// const embraer = new Embraer()

// maize.sitInPlane()
// embraer.sitInPlane()

// console.log(maize.startEngine())
// console.log(embraer.startEngine())



// ----------- 4.9. Интерфейсы объектов ---------- //
 
// interface IPerson {
//     name: string;
//     age?: number;
    
//     greet(phrase: string): void;
// }

// let user: IPerson;

// user = {
//     name: 'Bob',
     

//     greet (phrase: string) {
//         console.log(phrase + ' ' + this.name)
//     }
// }


// user.greet('Hallo everybody i am')


// ----------- 4.10. Интерфейсы классов ---------- //


// interface IPerson {
//     readonly name: string;
//     age: number;
    
//     greet(phrase: string): void;
// }

// interface IPilot {
//     flyMessage() : void;
// }

// class Pilot implements IPerson, IPilot {
//     constructor (public name: string, public age: number) {
//         this.checkAge();
//     }
//     private checkAge () {
//         if(this.age < 28) {
//             throw new Error('Pilot is too young')
//         }
//     }
//     public greet (phrase: string): void {
//         console.log(phrase + ' ' + this.name)
//     }

//     public flyMessage(): void {
//         console.log('Aircraft has reached desired flight level, enjoy your flight')
//     }
// }

// abstract class Aircraft {
//     protected pilot?: IPilot;

//     public sitInPlane(pilot: IPilot) {
//         this.pilot = pilot;
//     }

//     public abstract startEngine (): boolean;
// }
     
// class Embraer extends Aircraft {

//      public startEngine() {
//         if(!this.pilot) {
//             throw new Error('There is no pilot in the cockpit')
//         }

//         console.log('Starting engine')

//         this.pilot.flyMessage()
//         return true
//      }
// }

// class  Terrorist implements IPilot {
//     bluff (phrase: string) {
//         console.log(phrase)
//     }
//     public flyMessage(): void {
//         console.log('Our demands 100 million dollars, otherwise we will kill all the passengeres')
//     }
// }

// const aircraft = new Embraer()
// const pilot = new Terrorist();



// aircraft.sitInPlane(pilot);
// pilot.bluff('We have captured the ACFT')
// aircraft.startEngine();



// const pilot = new Pilot ('Andrew', 29)


// pilot.greet('Ladies and gentlemen, this is your Capitan speaking. Welcome on board.')
 
// aircraft.sitInPlane(pilot)

// aircraft.startEngine()

 
// ----------- 4.11. Интерфейсы как тип функции ---------- //

// type AddFunction = (n1: number, n2: number) => number
// interface AddFunction {
//     (n1: number, n2: number): number
// }

// const foo: AddFunction = (n1: number, n2: number) => {
//     return n1 + n2
// }


// ----------- Practice ---------- //

class Key {
    private signature: number;
  
    constructor () {
      this.signature = Math.random();
    }
  
    getSignature (): number {
      return this.signature;
    }
  }

  class Person {
    constructor (private key:Key) {}
    getKey (): Key {
      return this.key;
    }
  }

  abstract class House {
    protected door = false;
    private tenants: Person[] = [];
    constructor (protected key:Key) {}
  
    comeIn (person: Person):void {
      if (!this.door) {
        throw new Error('Door is close');
      }
  
      this.tenants.push(person);
      console.log('Person inside');
    }
  
    abstract openDoor (key:Key): boolean;
  }

  class MyHouse extends House {
    openDoor (key:Key) {
      if (key.getSignature() !== this.key.getSignature()) {
        throw new Error('Key to another door');
      }
  
      return this.door = true;
    }
  }
  
  const key = new Key();
  
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  
  house.comeIn(person);