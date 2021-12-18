"use strict";
exports.__esModule = true;
var dependency_resolver_1 = require("./dependency-resolver");
var Manager = /** @class */ (function () {
    function Manager() {
    }
    // call service and request to get instance for IDeveloper
    Manager.prototype.scheduleMeeting = function () {
        this.developer = dependency_resolver_1.DependencyResolver.resolveDeveloper("1", "Xyz", "IT", "Banking");
        console.log("Schedule a meeting");
        this.developer.invite();
    };
    return Manager;
}());
var manager = new Manager();
manager.scheduleMeeting();
