let arr = ['Wonderful', 'Joyful', 'Excellent', 'Happiness', 'Mapping', 'Time', 'Task', 'Apple']

let regexp = /^[^aA]{6,}$/
let newArr = []
for (let element of arr) {
	if (regexp.test(element)) {
		newArr.push(element)
	}
}

console.log(newArr)
