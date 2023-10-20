import { UserRole, respond } from "./UserRole";

export default class User {
    public readonly id:number;
    public readonly name:string;
    public readonly password:string;
    public readonly cpf:string;
    public readonly lastBetDay:Date ;
    public readonly role:UserRole;

    constructor(id:number, name:string, password:string, cpf:string, lastBetDay:Date, role:string){
        this.id = id;
        this.name = name;
        this.password = password;
        this.cpf = cpf;
        this.lastBetDay = lastBetDay;
        this.role = respond(role);
    }

}