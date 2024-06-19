
function pow(x,y){

	let result = 1;
	
	for(let i = 0; i < y; i++) {

		result = result * x;

	}
	return result
}

console.log(pow(3,3))
console.log(pow(2,5))
console.log(pow(4,3))
console.log(pow(7,2))
console.log(pow(5,3))
