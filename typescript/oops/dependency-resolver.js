"use strict";
exports.__esModule = true;
exports.DependencyResolver = void 0;
var developer_1 = require("./developer");
var DependencyResolver = /** @class */ (function () {
    function DependencyResolver() {
    }
    DependencyResolver.resolveDeveloper = function (id, name, dept, projet) {
        return new developer_1.Developer(name, dept, id, projet);
    };
    return DependencyResolver;
}());
exports.DependencyResolver = DependencyResolver;
