const Calculation = (x, n) => {
	console.log(`
		[x]: ${x}
		[n]: ${n}
	`);

	let resultObject = {
		average: null,
		deviation: null,
		variance: null
	};

	let sumOfN = n.reduce((accumulator, currentValue) => accumulator + currentValue);
	console.log("[sumOfN]: ", sumOfN);

	resultObject.average = (() => {
		let result = 0;
		for (let i = 0; i < x.length; i++) result += x[i] * n[i];
		result /= sumOfN;
		return result;
	})();


	resultObject.variance = (() => {
		let result = 0;

		for (let i = 0; i < x.length; i++) {
			console.log("[result before]: ", result);
			result += ((x[i] - resultObject.average) ** 2) * n[i];
			console.log("[result after]: ", result);
		}
		result /= sumOfN;
		return result;
	})();

	return resultObject;
}

export default Calculation;