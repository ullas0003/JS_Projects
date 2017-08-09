var arr = [1,2,3];
var i;
for (i = 0;i<arr.length;i++){
	console.log(arr[i]);
	
}
var name;

var test = {name :"ullas",age:"25"};

console.log(name = JSON.stringify(test));

console.log(JSON.parse(name));

var count = 0;

while(count< 10){
	count+=1;
	if(count % 2==1){
		continue;
	}
	console.log(count+"\n");

	
}