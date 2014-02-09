
module.exports = function(db) {
	return db.define('user', {
		username: String,
		password: String
	});
};
