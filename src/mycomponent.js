'use strict';
var m=require('mithril');
require('./mycomponent.css');

var MyComponent = {
	view: function(vn) {
		return m('.mycomponent', [
			"Hello world"
		]);
	}
};

module.exports = MyComponent;


