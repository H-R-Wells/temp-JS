console.log("Hello MDFK");
// Funstion for driving 

function candrive(a){
    if (a <= 18){
        console.log("You can't drive bitch");
    }
    else if(a>18 && a<=110){
        console.log("You can drive");
    }
    else {
        console.log("Who the hell are you bitch?\n"+
        "Are you still alive?")
    }
};

candrive(123);