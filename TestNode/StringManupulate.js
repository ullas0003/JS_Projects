var string1 = 'hello';
var string2 = "javascript";
console.log(string1);
var result = string1.concat(":",string2,"");
console.log(string1.length);

console.info(string1.toUpperCase());
console.info(string1.toLowerCase());
console.info(string1.length);
//console.info(result.trim());
console.info(result.replace(" :",":"));
console.info(result.replace(/j/g,"u"));

console.log(result.substring(8,17));
console.log(result.indexOf(":"));
console.log("index of trim =>>"+result.substring(0,result.indexOf(":")).trim());

console.log("index of trim =>>"+result.substring(result.indexOf(":")+1));

console.log("hello");