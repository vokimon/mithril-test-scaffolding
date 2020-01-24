global.window = require("mithril/test-utils/browserMock.js")();
global.document = window.document;
var jsdom = require("jsdom")
var dom = new jsdom.JSDOM("", {
    // So we can get `requestAnimationFrame`
    pretendToBeVisual: true,
})
global.requestAnimationFrame = dom.window.requestAnimationFrame

var context = require.context('./', true, /test.js$/);
console.log("Test require:", context.keys());
context.keys().forEach(context);
module.exports = context;

