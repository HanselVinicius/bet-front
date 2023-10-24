import { UserRole, respond } from "./UserRole";

export default class User {
    public readonly id:number;
    public readonly name:string;
    public readonly cpf:string;
    public readonly lastBetDay:Date;
    public readonly role:UserRole;
    public readonly token:string;

    constructor(id:number, name:string, cpf:string, lastBetDay:Date, role:string, token:string){
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.lastBetDay = lastBetDay;
        this.role = respond(role);
        this.token = token;
    }

    public static fromJson(response:any):User{
        return new User(response.data.usuarioid,response.data.usuario.login,response.data.usuario.cpf,response.data.usuario.lastBetDay,response.data.usuario.role,response.data.token);
    }

}
