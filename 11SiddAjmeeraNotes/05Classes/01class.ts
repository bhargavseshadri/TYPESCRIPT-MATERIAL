class Person {

    constructor(

       public firstName : string ,
       public lastName : string ,
       public age :number
    ){ }

    getFullName() : string{
        return `${this.firstName} ${this.lastName} ${this.age}`;

    }
}

const me : Person = new Person("john" , "doe" , 25);
console.log(me.getFullName());


//INHERITANCE

class employee extends Person{

    get employeId(): number{        //getters
        return this.id;
    }

    
   set employeeId(employeeId:number){    //setters
    this.id = employeeId
   }

    constructor(
    private id: number,
    private middleName : string,
    firstName : string,
    lastName : string,
    age : number
    ){
        super(firstName , lastName , age);
    }
}


const manager : Person = new employee(1 , "patrick" , "jane" , "doe" , 30);
console.log(`${manager.getFullName()}`);
const managerrr : employee = new employee(1 , "patrick" , "jane" , "doe" , 30);
console.log(managerrr.employeId);
