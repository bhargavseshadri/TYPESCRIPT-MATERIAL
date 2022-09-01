//ARRAY

//one way of declaring an array
let fruits : string[];
fruits = ["apple", "orange" , "banana" .toUpperCase() , (() => "watermelon")()];


//array
let numbers : Array<number> = [1,2,3,4,5,6,7,8,9];





//Another way of declaring an array

let genericArray : Array<string | number | boolean >;
genericArray = ["apple" , "banana" , 123 , 0b1111 , true , false  ];