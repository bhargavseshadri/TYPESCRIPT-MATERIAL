class human {
    private firstname : string;  //here we used PRIVATE ACCESS SPECIFIER

    constructor(theFirstname : string){
        this.firstname = theFirstname;
    }
    theHuman(): void{        //function
        console.log("this is " + this.firstname);
        
    }

}

var obj = new human ("bhargav");    //object