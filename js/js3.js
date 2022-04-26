// type conversion
console.log("Hello MDFK");
let myVar;
myVar = String(34);
console.log(myVar,(typeof myVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr1 = [1,2,3,4];
let arr2 = String([1,2,3,4]);
console.log(arr1.length,(typeof arr1));
console.log(arr2.length,(typeof arr2));

let i = 8;
console.log(i.toString());

let str1 = Number("3434");
let str2 = Number("3434chaman");
console.log(str1,(typeof str1));
console.log(str2,(typeof str2));


let number1 = parseFloat('34.3434')
console.log(number1,(typeof number1));


//  Type coercion
let num2 = '3434';
let num3 = 34;
console.log(num2+num3);

let num4 = 3434;
let num5 = 34;
console.log(num4+num5);