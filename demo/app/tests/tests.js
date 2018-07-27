var Cordova = require("nativescript-cordova").Cordova;
var cordova = new Cordova();

describe("greet function", function() {
    it("exists", function() {
        expect(cordova.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(cordova.greet()).toEqual("Hello, NS");
    });
});