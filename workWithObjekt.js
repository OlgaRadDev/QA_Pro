let car = {
	brand: "Tesla",
	yearOfProduction: 2020,
	color: "white",

	getInfo: function() {
		for (let key in car) {
			if(car.hasOwnProperty(key) && typeof car[key] !== 'function') {
				console.log(`${key}: ${car[key]}`);
			}
		}
	}
}

car.getInfo();
car.price = "200 000 USD";
car.getInfo();

