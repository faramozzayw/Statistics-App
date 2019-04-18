const CalculationStatic = (x, n) => {
	let resultObject = {
		average: null,
		deviation: null,
		variance: null
	};

	let sumOfN = n.reduce((accumulator, currentValue) => accumulator + currentValue);

	resultObject.average = (() => {
		let result = 0;
		for (let i = 0; i < x.length; i++) {
			result += x[i] * n[i];
		}
		result /= sumOfN;
		return result;
	})();

	resultObject.variance = (() => {
		let result = 0;
		for (let i = 0; i < x.length; i++) {
			result += ((x[i] - resultObject.average) ** 2) * n[i];
		}
		result /= sumOfN;
		return result;
	})();

	resultObject.deviation = (() => {
		return Math.sqrt(resultObject.variance)
	})();

	return resultObject;
}

export default CalculationStatic;