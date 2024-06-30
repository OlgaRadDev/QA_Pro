var services = {
	haircut: "60 uah",
	shaving: "80 uah",
	clean_head: "100 uah",
	break_the_window: "200 uah",
	
	price: function() {
		let total = 0;
		for (let key in this) {
			if (typeof this[key] === "string" && this[key].includes("uah")) {
				total += parseInt(this[key]);
			}
		}
		return total + " uah";
	},

	minPrice: function() {
		let prices = [];
		for (let key in this) {
			if (typeof this[key] === "string" && this[key].includes("uah")) {
				prices.push(parseInt(this[key]));
			}
		}

		let minPrice = Math.min(...prices);
		return minPrice + " uah";
	},

	maxPrice: function() {
		let prices = [];
		for (let key in this) {
			if (typeof this[key] === "string" && this[key].includes("uah")) {
				prices.push(parseInt(this[key]));
			}
		}
		let maxPrice = Math.max(...prices);
		return maxPrice + " uah";
	}
}

console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());



