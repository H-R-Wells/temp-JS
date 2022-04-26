// Functions

// String Concatination
console.log("Hello MDFK");
const name = 'Bitch';
const gm = 'good Morning ';
console.log(gm + name);

let html = '<h1>How are you Moron</h1>'+
'<P>Fcuk you</p>';

html = html.concat("This");
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());


// Indexing starts from 0 in JS also
console.log(html[4]);
console.log(html.charAt(4));

// indexOf is by default first occurence 
console.log(html.indexOf("you"));

// indexOf for last occurence is lastIndexOf
console.log(html.lastIndexOf("you"));

// endsWith and includes returns as boolean
console.log("Is html ends with This? " + html.endsWith('This'));
console.log("Is html ends with this? " + html.endsWith('this'));
console.log("Is html includes fcuk? " + html.includes('Fcuk'));

// Substring and Slice
console.log(html.substring(0,4));
console.log(html.slice(0,4));

console.log(html.substring(-1));
console.log(html.slice(-1));

// split splits every word after 'value' and returns array
console.log(html.split(' '));

// replace replaces only first occurence
console.log(html.replace('Fcuk','Fuck'));

