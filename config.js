
var fs = require('fs'),
	defaultConfigPath = './default_config.json',
	configPath = './config.json',
	configData;

try {
	configData = fs.readFileSync(configPath);
} catch (err) {
	// config file doesn't exist, create a new config file
	// with default settings from default_config.json
	configData = fs.readFileSync(defaultConfigPath);
	fs.writeFile(configPath, configData);
} finally {
	module.exports = JSON.parse(configData);
}
