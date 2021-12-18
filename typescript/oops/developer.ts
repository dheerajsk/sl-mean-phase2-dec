import { Employee } from "./employee";
import { IDeveloper } from "./IDeveloper";

export class Developer extends Employee implements IDeveloper{
    projectName: string;
    constructor(_name, _dept, _id, _projectName){
        super(_name, _dept, _id);
        this.projectName = _projectName;
    }
    printProjectName(): void {
      console.log(this.projectName);
    }
    writeCode(){
        console.log("Writing code");
    }

    invite(){
        console.log("Invited");
    }

}

var dev = new Developer("Dev1", "Bank", 2, "ICICI");
dev.print();
dev.writeCode();
dev.printProjectName();
