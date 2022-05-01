// Regular expression
let reg = /sunny/i;
let reg2 = /sunny/g;

console.log(reg);
let s = "Hello MDFK the big sunny bitch sunny";
// let result = reg.exec(s);
let result2 = reg2.exec(s);
console.log(result2);
result2 = reg2.exec(s);
// console.log(result);
console.log(result2);
result2 = reg2.exec(s);
console.log(result2);
if (result2){
console.log(result2.input);
console.log(result2.index);
}


let result3 = s.match(reg2);
console.log(result3);

let result4 = s.search(reg2);
console.log(result4);