const path = require('path');
const fs = require('fs');

/**
 * Read content from regex.txt file and return array of content
 * @param {String} filename - Name of the file in directory with helper.js
 * @param {RegExp} regexPattern - Regular Expression Pattern defined
 * @param {String} replaceString - Pass this argument if want to use find and replace mode
 * @returns {Array}
 */
module.exports = (filename, regexPattern, replaceString) => {
	// Check arguments
	if (!regexPattern) {
		throw new Error('Require regex');
	}
	if (!filename) {
		throw new Error('Require filename');
	}

	// read content from file
	const content = String(fs.readFileSync(path.resolve(process.cwd(), filename)));

	// form an array of string
	const arr = content.includes('\r') ? content.split('\r\n') : content.split('\n');

	// check if last element is an empty string
	if (!arr[arr.length - 1]) {
		arr.pop();
	}

	// check see if the mode is find and replace
	if (replaceString) {
		return arr.map((str) => str.replace(regexPattern, replaceString));
	}
	// execute find items and return result
	return arr.filter((el) => regexPattern.test(el));
};
