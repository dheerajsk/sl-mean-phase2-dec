"use strict";
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(_name, _dept, _id) {
        this.name = _name;
        this.dept = _dept;
        this.id = _id;
    }
    Employee.prototype.print = function () {
        console.log(this.name + " " + this.dept);
    };
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee("Jon", "IT", 1);
emp.print();
