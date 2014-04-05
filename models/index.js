
var config = require('../config'),
    fs = require('fs'),
    path = require('path'),
    Sequelize = require('sequelize'),
    lodash = require('lodash'),
    sequelize = new Sequelize(
        config.db_name,
        config.db_user,
        config.db_pass, {
            dialect: 'mysql',
            port: config.db_port
        }
    ),
    db = {};

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
})
.forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);
