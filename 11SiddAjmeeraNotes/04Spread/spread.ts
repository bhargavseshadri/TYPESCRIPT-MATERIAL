// spread operator is used to combine

//Spread in ARRAY

let fruit : Array<string> = ["apple" , "orange"];
let food : string[] = ["pizza" , "burger"];

let edibles : Array<string> = [...fruit,...food];

console.log(edibles);

//Spread in OBJECT

let users = {
    firstname : "seshadri",
    lastname : "bhargav"
};

let userDetails = {
    ...users,
    adderss : "123abc",
    email : "bhargav@gmail"
};
console.log(userDetails);

//spread in FUNCTION

function add (x?:number , y? : number , z?: number) : number{
    return x + y + z ;
};

let numberss : Array<number> = [1,2,3];
console.log(add(...numberss));


