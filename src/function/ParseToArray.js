const ParseToArray = string => {
	let array = string.split(',');
	let result = [];
	for(let i = 0; i < array.length; i++)
		result.push(Number(array[i]));
	return result;
}

export default ParseToArray;