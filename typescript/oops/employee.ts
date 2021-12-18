
export class Employee{
    name: string; // <namefVariable> : dataType
    dept: string;
    id: number;

    constructor(_name, _dept, _id){
        this.name = _name;
        this.dept = _dept;
        this.id = _id;
    }

    print(): void{ // <nameOFFunction>(<params>) : returnType
        console.log(this.name+" "+this.dept);
    }
}

var emp = new Employee("Jon", "IT", 1);
emp.print();
