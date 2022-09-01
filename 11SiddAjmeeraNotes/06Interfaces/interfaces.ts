interface Human {
    age : number;
    walk() : void;
}



interface person extends Human {           //inheritance
    firstName : string;
    lastName : string;

}

//For Objects

const user : person = {
    firstName : `ALFRED JAMES`,
    lastName : `PACINO`,
    age : 20,
    walk : () => {
        return ;
    }
};


//For classes

class employee implements person{
    firstName: "";
    lastName : " ";
    age = 10;
    walk() : void{

    }
}