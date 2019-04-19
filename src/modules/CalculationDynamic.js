const CalculationDynamic = (y, t, equal) => {
	let resultObject = {
		average: null,
		momentAverage: null,
		absIncrease: null
	};

	let n = y.length;
	resultObject.average = (() => y.reduce((accum, currentValue) => accum + currentValue) / n)();

	if (equal) {
		resultObject.momentAverage = (() => {
			let result = 0;
			for (let i = 0; i < n; i++) {
				if (i === 0) result += y[i] * .5;
				else if (i === n - 1) result += y[i] * .5;
				else result += y[i];
			}
			result /= n - 1;
			return result;
		})();
	} else {
		resultObject.momentAverage = (() => {
			let result = 0;
			for (let i = 0; i < n; i++) result += y[i] * t[i];
			result /= t.reduce((accum, currentValue) => accum + currentValue);
			return result;
		})();
	}

	resultObject.absIncrease = (() => {
		let result = 0;
		result = y[n - 1] - y[0];
		result /= n - 1;
		return result;
	})();

	return resultObject;
}

export default CalculationDynamic;