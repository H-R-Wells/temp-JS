    // Regular expression
// let reg = /sunny/i;
// let reg2 = /sunny/g;

// console.log(reg);
// let s = "Hello MDFK the big sunny bitch sunny";
// // let result = reg.exec(s);
// let result2 = reg2.exec(s);
// console.log(result2);
// result2 = reg2.exec(s);
// // console.log(result);
// console.log(result2);
// result2 = reg2.exec(s);
// console.log(result2);
// if (result2){
// console.log(result2.input);
// console.log(result2.index);
// }


// let result3 = s.match(reg2);
// console.log(result3);

// let result4 = s.search(reg2);
// console.log(result4);

let str = "Hello bitch how is it going?"
let regex = /h[o]w/;
if (regex.test(str)){
    console.log(`regex ${str} contains ${regex.source}`);
}
else{
    console.log(`regex ${str} does not contai ${regex.source}`);
}

let result = regex.exec(str);
console.log(result);