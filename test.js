// make fixes to give information about the author.
// Copyright by Bugaga.
// e-mail: bugaga@desaster.hell

var bo_one = {
	one: 100,
	two: 200,
	tri: 300,
	fur: 400,
	fiv: 500
	};
	
var bo_two = {
	color1: 'blue',
	color2: 'red',
	color3: 'ellow',
	color4: 'green',
	color5: 'black'
};

function printFull (arg){
	console.log(arg)
};

printFull(bo_one);
printFull(bo_two);

console.log(bo_one.one+' is '+bo_two.color3+ ' color!');

console.log(bo_one.two+' is '+bo_two.color2+ ' color!');

console.log(bo_one.tri+' is '+bo_two.color1+ ' color!');

console.log(bo_one.fur+' is '+bo_two.color4+ ' color!');