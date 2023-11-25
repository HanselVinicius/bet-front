export default class RegisterDto{
    private user:string;
    private password:string;
    private cpf:string;

    constructor(user:string,password:string,cpf:string){
        this.user = user;
        this.password = password;
        this.cpf = cpf;
    }
}