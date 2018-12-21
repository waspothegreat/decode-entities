const translationsObject = require('./entities.js');

/**
 * Decodes (for the most part) HTML entities
 * @param {string} encodedString The string to decode
 * @returns {string} The clean string with some entities decoded
 */
module.exports = (encodedString) => {
	const translateRegex = new RegExp(`&(${Object.keys(translationsObject).join('|')});`, 'g');
	const translateObject = translationsObject;

	return encodedString.replace(translateRegex, (match, entity) => translateObject[entity]).replace(/&#(\d+);/gi, (match, numStr) => {
		const num = parseInt(numStr, 10);

		return String.fromCharCode(num);
	});
};
