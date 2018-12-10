/**
 * Removes (for the most part) HTML entities
 * @param {string} encodedString The string to clean up
 * @returns {string} The clean string with some entities replaced, any others that couldn't be replaced will be removed.
 */
module.exports = (encodedString) => {
	const translateRegex = /&(nbsp|amp|quot|lt|gt);/g;
	const translateObject = {
		nbsp: ' ',
		amp: '&',
		quot: '"',
		lt: '<',
		gt: '>',
	};

	return encodedString.replace(translateRegex, (match, entity) => translateObject[entity]).replace(/&#(\d+);/gi, (match, numStr) => {
		const num = parseInt(numStr, 10);

		return String.fromCharCode(num);
	});
};
