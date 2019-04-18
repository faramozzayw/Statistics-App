const DateToNumber = string => {
	let array = string.split(',');
	console.log("array", array);

	let result = [];


	for(let i = 0; i < array.length; i++) {
		if (array[i].trim() !== '') {
			let dateUnix = new Date(array[i].split('.').reverse().toString());
			console.log(dateUnix.getTime()/1000);
			result.push(dateUnix.getTime()/1000);
		}
	}
	return result;
}

export default DateToNumber;