'use strict';
var o = require("ospec")
var MyComponent = require("./mycomponent");
var mq = require("mithril-query")
var o = require("ospec")

o.spec("math", function() {
	o.spec("arithmetics", function() {
		o("addition", function() {
			o(1 + 1).equals(2)
		})
		o("subtraction", function() {
			o(1 - 1).notEquals(2)
		})
	})
})
o.spec("MyComponent", function() {
    o("things are working", function() {
        var out = mq(MyComponent, {text: "What a wonderful day to be alive!"})

        out.should.contain("day")
    })
})

// vim: et ts=2 sw=2
