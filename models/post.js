
module.exports = function(db) {
	return db.define('post', {
		title: String,
		url: String,
		date: Date
	});
};
