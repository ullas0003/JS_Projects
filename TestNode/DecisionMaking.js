console.time("test");
//var val = Number(process.argv[2]);//command line nodejs
var val = 12;
if (val === 1) {
	console.log("one");

} else if (2 === val) {
	console.log("two");

} else {
	console.log("not above");
}
console.timeEnd("test");

switch (val) {
	case 1:
		console.log("sw one");
		break;
	case 2:
		console.log("sw two");
		break;
	default:
		console.log("sw default");
		break;

}

console.log("hello");



