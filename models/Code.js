//Dependencies

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WebDevSchema = new Schema({

	title: {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"liveURL": {
		type: String,
		trim: true,
		unique: true,
		required: true
	},

	"githubRepo": {
		type: String,
		trim: true,
		unique: true,
		required: true
	},

	"sentenceSummary": {
		type: String,
		trim: true,
		unique: false,
		required: true
	},

	"description": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image1URL": {
		type: String,
		trim: true,
		unique: false,
		required: true
	},

	"image1caption": {
		type: String,
		trim: true,
		unique: false,
		required: true
	},

	"image2URL": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image2caption": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image3URL": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"image3caption": {
		type: String,
		trim: true,
		unique: false,
		required: false
	},

	"technologiesUsed": {
		type: String,
		trim: true,
		unique: false,
		required: true
	}

});


var WebDev = mongoose.model('WebDev', WebDevSchema);

module.exports = WebDev;