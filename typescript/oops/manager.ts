import { Developer } from "./developer";
import { IDeveloper } from "./IDeveloper";


class Manager{

    developer: IDeveloper;

    // call service and request to get instance for IDeveloper

    scheduleMeeting(){
        console.log("Schedule a meeting");
        this.developer.invite();
    }
}

