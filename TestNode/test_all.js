var add = function(a, b) {
	return a + b;
};


var calc = function(a, b, callback) {

	return callback(a, b);
};

var ever = function(a, b) {

	console.log('check ' + a + ' and ' + b);

};


//var out = calc(2,3,'add');

console.log(calc(2, 3, ever));

// console.log(calc(2,3,function(a,b){
// 	return a-b;
// 	}));

// var age = parseInt("22");

// var name = "ullas".concat(",","ullas");

// console.log(typeof age);