/*var mul = function (a,b) {
	return a*b;
}
*/

var calc = function (a,b,callback) {
	return callback(a,b);
	
}


var name = calc(5,6,function(a,b){
	return a/b;
});

console.log(name);


function ullas (s) {
	return s;
}


console.log(ullas("x: number"));