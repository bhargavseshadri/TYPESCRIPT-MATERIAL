var pet = `DOG`;  //here pet scoped outside the function

function setpet(){
    var pet = `CAT`;    //here pet is scoped inside the function, because of VAR
    console.log(`Pet in the house is ${pet}`);
    
};

setpet();
console.log(`Pet outside the house is ${pet}`);