// setTimeOut and setInterval
function clicked(){
    alert("Thank You for clicking bitch")
}

function summ(a,b){
    return a+b;
}

sum2 = (a,b) => {
    return a+b;
}

log = () =>{
    document.getElementById('firstContainer').innerText = "Ok It's Working Bitch"
}

intv = () =>{
    console.log("Ok Great")
}
setTimeout(log, 4000);
sint = setInterval(intv, 4000);

// localStorage
localStorage.setItem('name', 'Shubham');
localStorage.getItem('name');
localStorage

// JSON
obj = {'name':'Shubham', a :{"MDFK":"Chaman"}};
jso = JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
console.log(obj);
console.log(typeof obj);