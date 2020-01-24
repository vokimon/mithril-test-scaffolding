'use strict';
var m=require('mithril');
var MyModel = require('./mymodel.js');
require('./mycomponent.css');

var myModel = new MyModel();

var MyComponent = {
	view: function(vn) {
		return m('.mycomponent', myModel.message());
	}
};

module.exports = MyComponent;


