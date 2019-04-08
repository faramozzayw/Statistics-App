const Calculation = (x, n) => {
	console.log(`
		[x]: ${x} => [typeof]: ${typeof x}
		[n]: ${n} => [typeof]: ${typeof n}
	`);

	let resultObject = {
		average: null,
		deviation: null,
		variance: null
	};

	let sumN = n.reduce((accumulator, currentValue) => accumulator + currentValue);
	console.log("[sumN]: ", sumN);

	resultObject.average = (function() {
		let result = 0;

		for (let i = 0; i < x.length; i++) {
			result += x[i] * n[i];
		}

		result /= sumN;
		return result;
	})();

	return resultObject;
}

export default Calculation;