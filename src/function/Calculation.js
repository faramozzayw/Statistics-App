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

	return resultObject;
}

export default Calculation;