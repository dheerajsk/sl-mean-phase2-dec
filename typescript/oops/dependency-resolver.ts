import { Developer } from "./developer";


export class DependencyResolver{

    static resolveDeveloper(id, name, dept, projet){
        return new Developer(name, dept, id, projet);
    }
}