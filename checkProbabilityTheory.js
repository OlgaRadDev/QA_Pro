
function checkProbabilityTheory(count) {
	let evenCount = 0;
	let oddCount = 0;

	for (let i = 0; i <=count; i++) {
		let randomNumber = Math.floor(Math.random() * 901) + 100;


		if (randomNumber % 2 ===0) {
			evenCount++;
		} else {
			oddCount++
		}
	}


	let evenPercentage = (evenCount/count)*100;
	let oddPercentage = (oddCount/count)*100;
	let ratioEventoOdd = evenPercentage/oddPercentage;

	console.log('Кількість сгенерованих чисел', count);
	console.log('Кількість парних чисел', evenCount);
	console.log('Кількість непарних чисел', oddCount);
	console.log('Відсоток парних чисел', evenPercentage + '%');
	console.log('Відсоток непарних чисел', oddPercentage + '%');
	console.log('Відношення парних до непарних', ratioEventoOdd.toFixed(4));
}

checkProbabilityTheory(500)