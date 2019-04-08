const ParseToArray = string => {
	let array = string.split(',');
	let result = [];
	let sum = 0;
	for(let i = 0; i < array.length; i++) {
		result.push(Number(array[i]));
		sum += Number(array[i]);
	}
	console.log(result, sum);
	return result;
}

export default ParseToArray;