'use strict';
var MyModel = require('./mymodel');
var o = require("ospec")

o.spec("MyModel", function() {
	var model = MyModel();
	o.spec("works", function() {
		o("message by default", function() {
			o(model.message()).equals('Hello wordl')
		})
	})
});

// vim: et ts=2 sw=2
