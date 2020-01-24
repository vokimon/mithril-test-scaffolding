'use strict';
var m = require('mithril');
var MyComponent = require('./mycomponent');

window.onload = function() {
	var element = document.getElementById('mithril-target');
	m.mount(element, MyComponent);
};


