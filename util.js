
module.exports.head = function(arr) {
	return arr && arr.length > 0 ? arr[0] : null;
};

module.exports.tail = function(arr) {
	return arr && arr.length > 1 ? arr.slice(1, arr.length) : null;
};
