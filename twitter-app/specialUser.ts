import { User } from "./user";

export class SpecialUser extends User{
    privileges: string[];
    verifiedOn: Date;
}