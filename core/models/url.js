const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShortUrlSchema = new Schema({
	url: String,
	createdAt: {type: Date, default: Date.now},
	modifiedAt: Date,
	short: String,
	click: {type: Number, default: 0}
});

ShortUrlSchema.index({ click: -1 });
ShortUrlSchema.index({ createdAt: -1 });
ShortUrlSchema.index({ modifiedAt: -1 });

module.exports = mongoose.model('ShortUrl', ShortUrlSchema);