const fs = require('fs');
const path = require('path');

const walk = module.exports.walk = (modulesPath, excludeDir, callback) => {
	fs.readdirSync(modulesPath).forEach(function(file) {
		var newPath = path.join(modulesPath, file);
		var stat = fs.statSync(newPath);
		if (stat.isFile() && /(.*)\.(js|coffee)$/.test(file)) {
			callback(newPath);
		} else if (stat.isDirectory() && file !== excludeDir) {
			walk(newPath, excludeDir, callback);
		}
	});
};