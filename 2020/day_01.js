const fs = require("fs");
fs.readFile("in/day_01.txt", (_, data) => {
	const dates = data.toString()
			.split(/\s+/)
			.map(x => parseInt(x, 10))
			.filter(x => !isNaN(x));
	const n = dates.length;
	console.log("expense report Z x Z");
	for (let i = 0; i < n; i += 1) {
		for (let j = i + 1; j < n; j += 1) {
			const a = dates[i];
			const b = dates[j];
			if (a + b == 2020) {
				console.log((a * b).toString());
			}
		}
	}
	console.log("\nexpense report Z x Z x Z");
	for (let i = 0; i < n; i += 1) {
		for (let j = i + 1; j < n; j += 1) {
			for (let k = j + 1; k < n; k += 1) {
				const a = dates[i];
				const b = dates[j];
				const c = dates[k];
				if (a + b + c == 2020) {
					console.log((a * b * c).toString());
				}
			}
		}
	}
});
