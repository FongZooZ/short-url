const util = require('./util');

module.exports.bootstrap = () => {
	util.walk(`${process.cwd()}/core/models`, null, (path) => {
		const model = require(path);
		model.on('index', err => {
			if (err) {
				console.error(model.modelName);
				console.error(err);
			}
		});
	});
};