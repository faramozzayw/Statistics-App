const DateToNumber = string => {
	let array = string.split(',');
	let result = [];
	for(let i = 0; i < array.length; i++) {
		if (array[i].trim() !== '') {
			let dateUnix = new Date(array[i].split('.').reverse().toString());
			result.push(dateUnix.getTime()/1000);
		}
	}
	return result;
}

export default DateToNumber;